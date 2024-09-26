
const spawn = require("child_process").spawn;


function Python(){
    let pyProcess = null;
    

    async function callScript(scriptName, arg1, arg2, arg3){
        let result = '';
        let errString = '';
        // console.log("Call python Script: "+scriptName);
        return new Promise((resolve, reject)=>{
            pyProcess = spawn('python',[scriptName, arg1, arg2, arg3]);

            pyProcess.stdout.on(`data` , (data) => {
                result += data.toString();
                // console.log("New Data")
            });

            pyProcess.stderr.on(`data` , (data) => {
                errString += data.toString();
                // console.log(errString)
            });
        
            pyProcess.on('close' , function(code) {
                console.log("Py Process Closed. Data:")
                resolve(result)
            });
            pyProcess.on('error' , function(err){
                console.log("Error on python script: ");
                console.log(err);
                reject(err)
            });
        })
    
    }

    return {
        callScript,
    }
}

module.exports = Python;