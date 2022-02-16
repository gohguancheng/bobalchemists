const mongoose = require("mongoose");

const teaCards_seed = [
  {
    _id: mongoose.Types.ObjectId("620b65d4a6941bd4c178849b"),
    name: "Matcha with Boba",
    createdBy: "guanch",
    description: "Great for those who like anything matcha but also like boba.",
    base: "620b29891d0ef89dbe4554f4",
    flavour: "620b2afdb98e26a5d939f8d8",
    toppings: ["620b50b59c2072e4dc9ba034"],
    likes: 5,
  },
  {
    _id: mongoose.Types.ObjectId("620b65d4a6941bd4c178849c"),
    name: "Hazelnut Milk Tea With Boba",
    createdBy: "rizal",
    description: "Classic With a twist of hazelnut. ",
    base: "620b2683d4912d8146ccc251",
    flavour: "620b2afdb98e26a5d939f8d6",
    toppings: ["620b50b59c2072e4dc9ba034"],
    likes: 15,
  },
  {
    _id: mongoose.Types.ObjectId("620b65d4a6941bd4c178849d"),
    name: "Durian Chocolate Milk With Grass Jelly and Red Beans",
    createdBy: "guanch",
    description: "Wierd combination for testing",
    base: "620b29891d0ef89dbe4554ef",
    flavour: "620b2afdb98e26a5d939f8d7",
    toppings: ["620b50b59c2072e4dc9ba035", "620b2c1943368a7111859dbf"],
    likes: 0,
  },
];

module.exports = teaCards_seed;
