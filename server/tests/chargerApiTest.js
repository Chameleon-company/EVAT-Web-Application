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
        }
        //convert to json
        const jsonRes = await res.json();
        console.log(JSON.stringify(jsonRes))
    } catch (error) {

        switch(error.cause.code){
            case "ECONNREFUSED":
                return {error: true, message: "Connection Refused"};
            default:
                return {error: true, message: "error.message"}
        }
    }

}



getData("GET", "http://localhost:3001/api/navigation/getchargers", "Get Ev Chargers API Test", {lat: -38.156041, lon: 144.361325, chargerType: "Charger 1"})
    .then(data=>{
        console.log(data)
    });