const mongoose = require("mongoose");

const toppings_Schema = new mongoose.Schema({
    name:{type: String, required: true},
    toppingsType:{type: String, default: "Others"},
    color: {type: String, default: "#ffffff"},
    img:{type: String, required: true}
});

module.exports = mongoose.model("Toppings", toppings_Schema);