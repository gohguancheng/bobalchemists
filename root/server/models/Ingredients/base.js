const mongoose = require("mongoose");

const base_Schema = new mongoose.Schema({
    name:{type: String, required: true},
    baseType:{type: String, default: "Others"},
    color: {type: String, default: "#ffffff"},
    img:{type: String, default: "no image"},
});

module.exports = mongoose.model("Bases", base_Schema);