// Import necessary libraries
const fs = require("fs");
require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Client } = require("@googlemaps/google-maps-services-js");
const speech = require("@google-cloud/speech");

// Initialize Google AI clients
const mapsClient = new Client({});
const speechClient = new speech.SpeechClient();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY_MITCHELL); // Replace with your Google API Key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const EVAT_AI = () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Replace with your Google Maps API Key
  /**
   * Extract locations from a natural language sentence.
   * @param {string} sentence - The sentence to extract locations from.
   * @returns {Object} An object containing the start and destination locations.
   * @description This function uses Google Generative AI to extract locations and route information from a sentence.
   */
  const extractLocations = async (sentence) => {

    const prompt = `Extract locations and route-related information inlcuding stops from the following sentence "${sentence}". 
    Get centre location lat and lon values and return using JSON schema:
    {origin: {name: 'str', lat, lng}, stops: [{name: 'str', lat: float, lng: float, amenityType}], destination: {name: 'string', lat, lng}}
    Please return only valid JSON without any additional explanation or text.`
    // console.log("Prompt: "+prompt)
    
    const aiResponse = await model.generateContent([prompt]);
    const responseText = aiResponse.response.text().replace(/'''|```|json/g, '').trim();
    // const locations = text.match(/(?:from\s)(\w+)(?:\sto\s)(\w+)/i);
    const locations = JSON.parse(responseText);
    return locations;
  };



  /**
   * Create a route using Google Maps API from a natural language sentence.
   * @param {string} sentence - The sentence describing the route (e.g., "Plan a trip from Sydney to Melbourne").
   * @returns {Object} An object containing the start, destination, and the route details.
   * @description This function generates a driving route based on the input sentence using the Google Maps Directions API.
   */
  const createRouteFromSentence = async (sentence) => {
    const locations = await extractLocations(sentence);
    const route = await mapsClient.directions({
      params: {
        origin: locations.origin,
        destination: locations.destination,
        key: apiKey,
      },
    });

    return {
      origin: locations.origin,
      destination: locations.destination,
      route: route.data,
      // route: route.data.routes[0].legs[0].steps.map((step) => step.html_instructions),
    };
  };

  /**
   * Find nearby places using Google Places API.
   * @param {Object} location - An object containing latitude and longitude (e.g., { lat: -33.8675, lon: 151.2070 }).
   * @param {string} placeType - Type of place to search for (e.g., "restaurant", "park").
   * @param {number} [distance=5000] - Distance radius in meters to search for places.
   * @returns {Array} An array of nearby places with their names and distances.
   * @description This function uses the Google Places API to find nearby places within a certain radius.
   */
  const findPlacesNearby = async (location, placeType, distance = 5000) => {
    const nearbyPlaces = await mapsClient.placesNearby({
      params: {
        location: location,
        radius: distance,
        type: placeType,
        key: apiKey,
      },
    });
    return nearbyPlaces.data.results;
    //BELOW RETURNS FILTERED DATA
    // return nearbyPlaces.data.results.map((place) => ({
    //   name: place.name,
    //   distance: place.vicinity,
    // }));
  };



  /**
   * Find nearby EV chargers using Google Places API.
   * @param {Object} location - An object containing latitude and longitude (e.g., { lat: -33.8675, lon: 151.2070 }).
   * @param {number} [distance=5000] - Distance radius in meters to search for EV chargers.
   * @returns {Array} An array of nearby EV chargers with their names and distances.
   * @description This function uses the Google Places API to find nearby EV chargers within a certain radius.
   */
  const getEVChargers = async (location, distance = 3000) => {
    const evChargers = await mapsClient.placesNearby({
      params: {
        location: location,
        radius: distance,
        type: "",
        keyword: "EV charging station",
        key: apiKey,
      },
    });

    // console.log(evChargers.data)

    return evChargers.data;
    //BELOW RETURNS FILTERED DATA
    // return evChargers.data.results.map((charger) => ({
    //   name: charger.name,
    //   distance: charger.vicinity,
    // }));
  };

  
  
  //OLD VTT USING SPEECH LIBRARY
  // /**
  //  * Convert voice input to text using Google Speech-to-Text API.
  //  * @param {Buffer} audioBuffer - Audio data received from the client (Express endpoint).
  //  * @returns {string} Transcribed text from the audio.
  //  * @description This function converts audio blob data received from an Express endpoint into text.
  //  */
  // const vtt = async (audioBuffer) => {
  //   const audio = {
  //     content: audioBuffer.toString("base64"), // Pass audio blob directly as a buffer
  //   };

  //   const request = {
  //     audio,
  //     config: {
  //       encoding: "LINEAR16",
  //       sampleRateHertz: 16000,
  //       languageCode: "en-US",
  //     },
  //   };

  //   const [response] = await speechClient.recognize(request);
  //   const transcription = response.results
  //     .map((result) => result.alternatives[0].transcript)
  //     .join("\n");
  //   return transcription;
  // };



  const vtt = async (audioBlob) => {
 
    const audioString = audioBlob.toString('base64');
    const prompt = `Please transcibe this recording:`

    const file = {
      mime_type: "audio/wav",
      data: audioString
    }
    
    const aiResponse = await model.generateContent([prompt, file]);
    const responseText = aiResponse.response.text().replace(/'''|```|json/g, '').trim();
    // const locations = text.match(/(?:from\s)(\w+)(?:\sto\s)(\w+)/i);
    const locations = JSON.parse(responseText);
    return locations;
  };

  /**
   * Process voice input and delegate it to the appropriate function.
   * @param {string} voiceText - Transcribed text to process.
   * @returns {Object|string} The response based on the voice command (e.g., route, nearby places, EV chargers).
   * @description This function takes transcribed voice input and processes it to determine which task to perform.
   */
  const processVoiceInput = async (voiceText) => {
    console.log(`Received voice input: ${voiceText}`);

    if (voiceText.includes("route")) {
      return await createRouteFromSentence(voiceText);
    } else if (voiceText.includes("restaurant")) {
      return await findPlacesNearby("current location", "restaurant");
    } else if (voiceText.includes("charger")) {
      return await getEVChargers("current location");
    } else {
      return "Sorry, I didn't understand the request.";
    }
  };

  /**
   * Generate content using Google Generative AI.
   * @param {string} prompt - The text prompt to generate content (e.g., "Does this look store-bought or homemade?").
   * @param {string} imagePath - Path to the image file to be analyzed (e.g., "cookie.png").
   * @returns {string} The response from the generative AI model.
   * @description This function uses Google Generative AI to generate content based on a prompt and image.
   */
  const generateContentFromPrompt = async (prompt, imagePath) => {
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const image = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
        mimeType: "image/png",
      },
    };

    const result = await model.generateContent({
      prompt: [prompt, image],
    });

    return result.responses[0].text; // Returning the result from the AI model
  };

  return {
    createRouteFromSentence,
    findPlacesNearby,
    getEVChargers,
    vtt,
    processVoiceInput,
    generateContentFromPrompt, // Expose the new method for generating content from prompt and image
  };
};

module.exports = EVAT_AI

// // Example usage (you would need actual coordinates and audio files for this to work in practice)
// const ai = EVAT_AI();

// // Simulate generating content from a prompt and image
// ai.generateContentFromPrompt("Does this look store-bought or homemade?", "cookie.png")
//   .then(console.log)
//   .catch(console.error);
