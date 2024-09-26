const express = require("express");
const router = express.Router();

// router.use(express.json());

router.get('/', (req, res, next)=>{
    console.log("Config get api hit")
    res.json({ message: 'Config API root' });
})

router.post('/', (req, res, next)=>{
    res.json({ message: 'Mapping API root' });
})


module.exports = router;



