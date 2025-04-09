const PyWrap = require('../scripts/pythonWrapper.js')();
const path = require("path");

const url = path.resolve(__dirname, '..', 'scripts','python','getnearestcharger.py')

console.log(url)

PyWrap.callScript(url, -22.93625, 115.871531, 'CHADeMO')
    .then(data=>{
        console.log("Python Wrapper Test: get chargers");
        console.log(data);
    })