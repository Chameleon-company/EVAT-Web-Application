const express = require("express");
const router = express.Router();
const EVAT_AI = require("../scripts/evat_ai");
const PyWrap = require('../scripts/pythonWrapper.js')();
const LocalJSON = require('../scripts/localJson.js');
const path = require("path");

const ai = EVAT_AI();



//checks if lat and lon are valid
function isLatLonValid(lat, lon){
    if(!lat || !lon || isNaN(lat) || isNaN(lon)){
        return {error: true, message: "Did not provide enough information: lat or lon not valid or missing"};
    }
    if(lat < -90 || lat > 90 || lon < -180 || lon > 180){
        return {error: true, message: "Invalid data values: lat or lon value not within range lat = -90 to 90, lon = -180 to 180)"};
    }
    return true;
}




//ROUTER END POINTS
router.get('/', async (req, res, next) => {
    if (!req.query.prompt) {
        res.statusCode = 400;
        return res.json({ error: true, message: '/api/navigation: No Prompt present' });
    } else {
        const response = await ai.fromPrompt(req.query.prompt);
        res.json({ message: 'Navigation API root', data: response });
    }
})

//used to convert voice to a text file
router.post('/vtt', (req, res, next)=>{
    const data = "";
    //functionality for converting a voice blob to text.
    res.json({ message: 'Convert voice to text', data});
})


// gets service/s using the origin and destination of trip
router.get('/getservice', async (req, res, next) => {
    const { origin, destination } = req.query;
    const response = await ai.createRouteFromSentence(req.query.prompt);
    res.json({ message: 'Navigation: get services', data: response });
})

//gets chargers nearest to location using python scripts
router.get('/getchargers', async (req, res, next) => {
    const { lat, lon, chargerType } = req.query;

    //for testing time taken to retrieve data
    console.log("Getting Nearest Charging Station")
    console.log(new Date())

    // functionality to get charging stations from python script
    const getChargersUrl = path.resolve(__dirname, '..', 'scripts','python','getnearestcharger.py')
    let result = await PyWrap.callScript(getChargersUrl, lat, lon); 
    
    //for testing time taken to retrieve data
    console.log("Charging Station Retrieved")
    console.log(new Date())
    
    res.json({ message: 'Navigation: get nearest chargers', data: JSON.parse(result) });
})

//gets chargers nearest to location using python nodejs
router.get('/ev-chargers', async (req, res, next) => {
    console.log("Getting Chargers Google API")
    const { lat, lon, distance, chargerType } = req.query;
    //check if lat and lon values have been given
    const locCheck = isLatLonValid(lat, lon)
    if(locCheck.error){
        res.statusCode = 400;
        return res.json({error: true, message: locCheck.message});
    }

    const dist = !distance ? 3000 : distance;
    
    // functionality to get charging stations from python script
    const response = await ai.getEVChargers({lat, lng: lon}, dist)

    // console.log(response)

    res.json({ message: 'Navigation: get nearest chargers', data: response.results });
})

//gets charger single charger using local file for testing
router.get('/getchargerstest', async (req, res, next) => {

    const { lat, lon, chargerType } = req.query;
    
    //load local JSON for API testing
    let result = await LocalJSON.load("./tests/testData/testData.json");
    if(result.error) return result;

    res.json({ message: 'Navigation: get nearest chargers', data: result.data });
})



router.post('/', (req, res, next) => {
    res.json({ message: 'Map API root' });
})



module.exports = router;



