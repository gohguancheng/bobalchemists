const mongoose = require("mongoose");
require("dotenv").config({ path: "./../../../.env" });

const seedUsers = [
  // add in super user
  {
    _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd34"),
    username: "Aang",
    password: "password123",
    userCreations: [
      "620b65d4a6941bd4c178849d",
      "620b65d4a6941bd4c178849e",
      "620b65d4a6941bd4c1788491",
      "520b65d4a6941bd4c178141a",
    ],
    likedCreations: [
      "620b65d4a6941bd4c178849d",
      "620b65d4a6941bd4c178849e",
      "620b65d4a6941bd4c1788491",
      "520b65d4a6941bd4c178141a",
    ],
  },
  {
    _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd35"),
    username: "Toph",
    password: "passwords",
    userCreations: [
      "620b65d4a6941bd4c178849b",
      "620b65d4a6941bd4c1781491",
      "520b65d4a6941bd4c1781411",
    ],
    likedCreations: ["620b65d4a6941bd4c178849b", "520b65d4a6941bd4c1781411"],
  },
  {
    _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd36"),
    username: "Katara",
    password: "passwordclone",
    userCreations: ["620b65d4a6941bd4c178849c", "520b65d4a6941bd4c1781491"],
    likedCreations: [
      "620b65d4a6941bd4c178849c",
      "520b65d4a6941bd4c1781491",
      "620b65d4a6941bd4c178849d",
      "620b65d4a6941bd4c178849e",
      "620b65d4a6941bd4c1788491",
      "520b65d4a6941bd4c178141a",
      "620b65d4a6941bd4c178849b",
      "620b65d4a6941bd4c1781491",
      "520b65d4a6941bd4c1781411",
    ],
  },
];

module.exports = seedUsers;
