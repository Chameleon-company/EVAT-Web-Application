import "./App.css";
import React from "react";
import { ArrowLeft, MapPin, Star, Clock, Share2, Power } from "lucide-react";

function chargingStation() {
  return (
    <div className="App">
      {" "}
      <div className="max-w-md mx-auto bg-gray-100 p-4 font-sans">
        <header className="flex items-center mb-4">
          <ArrowLeft className="w-6 h-6 mr-4" />
          <h1 className="text-xl font-semibold">Charging Station</h1>
        </header>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
          <img
            src="/api/placeholder/400/200"
            alt="Charging Station"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">
              Austin Hospital Car Park
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              145 Studley Rd, Heidelberg VIC 3084, Australia
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-green-600">
                2 of 2 chargers available
              </span>
              <span className="text-sm font-medium">Plug Types: Type 2</span>
            </div>
            <div className="flex space-x-2 mb-4">
              <button className="flex-1 bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-1" /> Directions
              </button>
              <button className="flex-1 bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs flex items-center justify-center">
                <Star className="w-4 h-4 mr-1" /> Save
              </button>
              <button className="flex-1 bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1" /> Report
              </button>
              <button className="flex-1 bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs flex items-center justify-center">
                <Share2 className="w-4 h-4 mr-1" /> Share
              </button>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md font-medium">
              Check in
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Plugs</h3>
          <div className="flex items-center">
            <Power className="w-6 h-6 mr-2" />
            <div>
              <p className="font-medium">Type 2</p>
              <p className="text-sm text-gray-600">
                4 Available | 22kW | 2 Stations
              </p>
              <p className="text-sm text-gray-600">Chargefox</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Checkins</h3>
          {["Sanji", "Zoro", "MLD", "Michael Scott"].map((name, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-sm text-gray-600">
                  {index < 3 ? "Tesla Y" : "No space found due t..."}
                </p>
              </div>
              <p className="text-sm text-gray-600">06/06/2016, 5:00am</p>
            </div>
          ))}
          <button className="w-full text-blue-600 font-medium mt-2">
            View All
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Amenities</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              "Dining",
              "Restrooms",
              "Shopping",
              "Lodging",
              "Park",
              "Grocery",
              "WiFi",
              "Valet Parking",
              "Hiking",
              "Camping",
              "Free Charging",
            ].map((amenity, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mb-1"></div>
                <span className="text-xs text-center">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <footer className="flex justify-between">
          <button className="flex flex-col items-center">
            <MapPin className="w-6 h-6" />
            <span className="text-xs">Map</span>
          </button>
          <button className="flex flex-col items-center">
            <Clock className="w-6 h-6" />
            <span className="text-xs">Trip planner</span>
          </button>
          <button className="flex flex-col items-center">
            <Star className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-blue-600">Save</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span className="text-xs">Me</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;