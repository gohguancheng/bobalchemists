const path = require("path");

//express
const express = require("express");
const app = express();

//mongoose
const mongoose = require("mongoose");
const db = mongoose.connection;

//.env import and configuration
require("dotenv").config({path: "../.env"});
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGODB_URI;

//import express-session
const session = require("express-session");

//import controllers
const registrationController = require('./controller/User.controller.js');
const sessionController = require('./controller/Sessions.controller.js');

const ingredientsController = require('./controller/Ingredients.controller');

//connect to mongoDB
mongoose.connect(mongoURI, {useNewUrlParser: true,});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose successfully!");
});

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo database connected successfully!"));
db.on("disconnected", () => console.log("mongo database disconnected"));

//app middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SECRET, //some random string
  resave: false,
  saveUninitialized: false
}));

//route middleware
app.use('/api/registration/', registrationController);
app.use('/api/sessions/', sessionController);

app.use('/api/ingredients/', ingredientsController);


//for build
/* app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});
 */
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
