//get all system environment variables
require('dotenv').config()
const path = require("path");
const express = require("express");
const app = express();

//routers
const NavRoutes = require("./routes/NavRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");
const UserRoutes = require("./routes/UserRoutes");
const ConfigRoutes = require("./routes/ConfigRoutes");

//global vars
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

//all API endpoints
app.use('/user', UserRoutes);
app.use('/api/config', ConfigRoutes);
app.use('/api/vehicle', VehicleRoutes);
app.use('/api/navigation', NavRoutes);


app.use(express.static('./build'));

app.get('*', (req, res) => {
    //uncomment this if you have static files to server
    const url = path.resolve(__dirname, 'build', 'error.html');
    console.log(url)
    res.sendFile(url);
});


app.listen(PORT, () => {
    console.log("Server Listening on port: " + PORT);
})