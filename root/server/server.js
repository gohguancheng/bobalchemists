const path = require("path");

//express
const express = require("express");
const app = express();

//mongoose
const mongoose = require("mongoose");
const db = mongoose.connection;

//.env
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGODB_URI;

//import controllers

//connect to mongoDB
mongoose.connect(mongoURI, {useNewUrlParser: true,});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose at " + mongoURI);
});

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

//app middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route middleware


//for build
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
