const mongoose = require("mongoose");

const flavour_Schema = new mongoose.Schema({
    name:{type: String, required: true},
    flavourType:{type: String, default: "Others"},
    color: {type: String, default: "#ffffff"},
    img:{type: String, default:"no image"}
});

module.exports = mongoose.model("Flavours", flavour_Schema);