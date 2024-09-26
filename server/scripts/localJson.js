const fs = require("fs");



function LocalJSON(){

    const load = async (fileUrl)=>{
      return new Promise((resolve, reject)=>{
        fs.readFile(fileUrl, "utf8", (error, data) => {
          //if error occurs
          if (error) resolve({error: true, message: "Error loading file"});
          resolve({error: false, data: JSON.parse(data)});
        });
      })    
    }

    return{
        load
    }
}

module.exports = LocalJSON()