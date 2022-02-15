const mongoose = require("mongoose");
const base_seed = [
    {
        _id: mongoose.Types.ObjectId("620b2683d4912d8146ccc251"),
        name: "Regular Milk Tea",
        baseType: "Milk Tea",
        color: "#966835",
        img: " ",
    },
    {
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
        name: "Milo",
        baseType: "Powders",
        color: "#735b3b",
        img: " "
    },
    {
        _id: mongoose.Types.ObjectId("620b29891d0ef89dbe4554ef"),
        name:"Fresh Milk",
        baseType: "Milk",
        color: "#ffffff",
        img: " "
    },
    {
        _id: mongoose.Types.ObjectId("620b29891d0ef89dbe4554f0"),
        name:"Passionfruit Tea",
        baseType: "Fruit Tea",
        color: "#e8bf2c",
        img:" "
    }
];

module.exports = base_seed;
