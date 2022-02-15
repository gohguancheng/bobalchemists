const mongoose = require("mongoose");

const toppings_seed = [
/*     {
        _id: mongoose.Types.ObjectId("620b2c1943368a7111859dbd"),
        name: "Vanilla Ice Cream",
        toppingsType: "Ice Cream",
        color: "#ffffff",
        img:" "
    }, */
    {
        _id: mongoose.Types.ObjectId("620b2c1943368a7111859dbe"),
        name: "Brown Sugar Pearls",
        toppingsType: "Pearls",
        color: "#000000",
        img:"https://i.imgur.com/cBqnwy8.png"
    },
    {
        _id: mongoose.Types.ObjectId("620b2c1943368a7111859dbf"),
        name: "Herbal Jelly",
        toppingsType: "Jelly",
        color: "#000000",
        img:"https://i.imgur.com/xrvOWPQ.png"
    },
/*     {
        _id: mongoose.Types.ObjectId("620b2c1943368a7111859dc0"),
        name: "Aloe Vera",
        color: "#ffffff",
        img:" "
    }, */
    {
        _id: mongoose.Types.ObjectId("620b50b59c2072e4dc9ba034"),
        name: "Tapioca Pearls",
        toppingsType: "Pearls",
        color: "#000000",
        img: "https://i.imgur.com/vjaWoGk.png"
    },
    {
        _id: mongoose.Types.ObjectId("620b50b59c2072e4dc9ba035"),
        name: "Red Bean",
        toppingsType: "Beans",
        color: "#000000",
        img: "https://i.imgur.com/3XfRy3P.png"
    },
    {
        /* _id: mongoose.Types.ObjectId("620b50b59c2072e4dc9ba035"), */
        name: "Pudding",
        toppingsType: "Jelly",
        color: "#000000",
        img: "https://i.imgur.com/xdBj57p.png"
    },
    
]

module.exports = toppings_seed;