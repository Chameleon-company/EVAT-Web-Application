//this module handles all backend routes for the vehicle API
const express = require("express");
const router = express.Router();
const vehicles = require("../data/vehicles");



router.get('/', (req, res, next)=>{
    res.json({ message: 'Vehicle API root' });
})

//add vehicle to list
router.post('/add', (req, res, next)=>{
    //create functionality for adding a vehicle
    res.json({ message: 'Add Vehicle API root' });
})

//get list of vehicles
router.get('/getall', (req, res, next)=>{
    //create functionality for getting vehicle list
    res.json({ message: 'Get all Vehicles', data:  vehicles});
})

//gets list of vehicles that match
router.get('/getbyfeature', (req, res, next)=>{
    //create functionality for getting vehicle list by features
    //such as chargerType = "Type 2"
    let data = {}
    
    res.json({ message: 'Get Vehicles by feature', data});
})


module.exports = router;
