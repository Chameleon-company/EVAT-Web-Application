const express = require("express");
const router = express.Router();
/**
 * get details
 * set details {name, address, email, 
 * }
 * change password
 * reset password
 * 
 */

router.get('/', (req, res, next)=>{
    res.json({ message: 'Mapping API root' });
})

router.post('/', (req, res, next)=>{
    res.json({ message: 'Mapping API root' });
})

//used to find information from a sentence.
router.post('/search', (req, res, next)=>{
    res.json({ message: 'Mapping API root' });
})


module.exports = router;



