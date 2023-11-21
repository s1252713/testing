const assert = require('assert');
const bodyParser = require('body-parser');
const session = require("cookie-session");
const ejs = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const dbname = '';

//can change the name
const app = express();

//Login Data for Login
var LoginID = new Array(
    {name: "Tom", password: "123"},
    {name: "Amy", password: "456"},
    {name: "Ben", password: "789"}
)

//Connect to MongoDB
const connect = async () => {
    mongoose.connect('mongodb+srv://RHYTHM:1234@atlascluster.367lwzr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
        .then(() => console.log('Connected to database movieDB'))
        .catch((err) => console.log(err));
}

//Connect function (callback)
connect();


//Localhost:8000
app.listen(8000, () => {
    console.log("Server started on port 8000")
});


