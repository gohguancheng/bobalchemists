const mongoose = require("mongoose");

const toppings_seed = [
    {
        _id: mongoose.Types.ObjectId("620b2c1943368a7111859dbd"),
        name: "Vanilla Ice Cream",
        toppingsType: "Ice Cream",
        color: "#ffffff",
        img:" "
    },
    {
        _id: mongoose.Types.ObjectId("620b2c1943368a7111859dbe"),
        name: "Brown Sugar Pearls",
        toppingsType: "Pearls",
        color: "#000000",
        img:" "
    },
    {
        _id: mongoose.Types.ObjectId("620b2c1943368a7111859dbf"),
        name: "Herbal Jelly",
        toppingsType: "Jelly",
        color: "#000000",
        img:" "
    },
    {
        _id: mongoose.Types.ObjectId("620b2c1943368a7111859dc0"),
        name: "Aloe Vera",
        color: "#ffffff",
        img:" "
    }
]

module.exports = toppings_seed;