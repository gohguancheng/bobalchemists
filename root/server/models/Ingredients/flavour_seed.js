const mongoose = require("mongoose");

const flavour_seed = [
  {
    _id: mongoose.Types.ObjectId("620b2afdb98e26a5d939f8d4"),
    name: "Caramel",
    flavourType: "Others",
    color: "#bc8e06",
    img: "https://i.imgur.com/gVmvLQg.png",
  },
  {
    _id: mongoose.Types.ObjectId("620b2afdb98e26a5d939f8d5"),
    name: "Brown Sugar",
    flavourType: "Others",
    color: "#b09735",
    img: "https://i.imgur.com/OZOZzKz.png",
  },
  {
    _id: mongoose.Types.ObjectId("620b2afdb98e26a5d939f8d6"),
    name: "Hazelnut",
    flavourType: "Nuts",
    color: "#996b0b",
    img: "https://i.imgur.com/nhdN9kD.png",
  },
  {
    _id: mongoose.Types.ObjectId("620b2afdb98e26a5d939f8d7"),
    name: "Durian",
    flavourType: "Fruits",
    color: "#170b81",
    img: "https://i.imgur.com/TXT4bTJ.png",
  },
  // {
  //     _id: mongoose.Types.ObjectId("620b2afdb98e26a5d939f8d8"),
  //     name: "No Flavouring",
  //     flavourType: "Others",
  //     color: "#000000",
  // }
];

module.exports = flavour_seed;
