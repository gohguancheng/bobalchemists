const mongoose = require("mongoose");
const base_seed = [
  {
    _id: mongoose.Types.ObjectId("620b2683d4912d8146ccc251"),
    name: "Regular Milk Tea",
    baseType: "Milk Tea",
    color: "#966835",
    img: "https://i.imgur.com/6i1IAmB.png",
  },
  /*     {
        _id: mongoose.Types.ObjectId("620b29891d0ef89dbe4554ec"),
        name: "Mocha",
        baseType: "Coffee",
        color: "#6b4a26",
        img: " ",
    },
    {
        _id: mongoose.Types.ObjectId("620b29891d0ef89dbe4554ed"),
        name: "Green Tea",
        baseType: "Plain Tea",
        color: "#87be76",
        img: " ",
    },
    {
        _id: mongoose.Types.ObjectId("620b29891d0ef89dbe4554ee"),
        name: "Fresh Milk",
        baseType: "Milk",
        color: "#ffffff",
        img: " "
    }, */
  {
    _id: mongoose.Types.ObjectId("620b29891d0ef89dbe4554ef"),
    name: "Chocolate Milk",
    baseType: "Milk",
    color: "#735b3b",
    img: "https://i.imgur.com/auzcIwt.png",
  },
  /*     {
        _id: mongoose.Types.ObjectId("620b29891d0ef89dbe4554f0"),
        name:"Passionfruit Tea",
        baseType: "Fruit Tea",
        color: "#e8bf2c",
        img:" "
    }, */
  {
    _id: mongoose.Types.ObjectId("620b29891d0ef89dbe4554f4"),
    name: "Matcha",
    baseType: "Plain Tea",
    color: "#04c424",
    img: "https://i.imgur.com/Jkenooc.png",
  },
  {
    _id: mongoose.Types.ObjectId("620b49d048ec688f7edaf0e6"),
    name: "Ovaltine",
    baseType: "Powders",
    color: "#04c424",
    img: "https://imgur.com/X1lkxJF.png",
  },
  {
    _id: mongoose.Types.ObjectId("620b49d048ec688f7edaf0e7"),
    name: "Coffee",
    baseType: "Coffee",
    color: "#04c424",
    img: "https://i.imgur.com/CheeaDn.png",
  },
];

module.exports = base_seed;
