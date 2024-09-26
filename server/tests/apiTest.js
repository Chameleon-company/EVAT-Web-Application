async function getData(method, url, commentString, data) {
    
    let options = {};

    try {
        console.log(commentString);
        //check request method
        if (method == "GET") {
            url = url + "?" + new URLSearchParams(data);
            options = { method }
        } else {
            options = { method, body: JSON.stringify(data) }
        }

        console.log("URL: " + url)
        //perform http request
        let res = await fetch(url, options);

        if (!res.ok) {
            console.log("Error sending request - Status: " + res.status);
            return;
        }
        //convert to json
        const jsonRes = await res.json();
        // console.log(jsonRes)
        // console.log(JSON.stringify(jsonRes))
        return jsonRes
    } catch (error) {

        switch(error.cause.code){
            case "ECONNREFUSED":
                return {error: true, message: "Connection Refused"};
            default:
                return {error: true, message: error.message}
        }
    }

}


//config api tests
// getData("GET", "http://localhost:3001/api/config", "Config API", {})

// getData("GET", "http://localhost:3001/api/navigation/getservice", "Navigation with prompt", { prompt: "Trip from geelong to melbourne city" });
getData("GET", "http://localhost:3001/api/navigation/getchargersnode", "Nearest Charger: Node Libraries", { lat: -38.162328, lon: 144.363099})
    .then(data=>{
        console.log(data)
    });
// getData("GET", "http://localhost:3001/api/navigation/getchargerstest", "Nearest Charger: Static file", { lat: -38.21654, lon: 144.2316454});

// getData("GET", "http://localhost:3001/api/vehicle/getall", "Vehicle get list", {});