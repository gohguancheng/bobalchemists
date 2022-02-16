const mongoose = require("mongoose");

const seedUsers = [
    {
        _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd34"),
        username: "guanch", 
        password:"password",
        userCreations:["620b65d4a6941bd4c178849b", "620b65d4a6941bd4c178849d"]
    },
    {
        _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd35"),
        username: "rizal", 
        password:"password",
        userCreations: ["620b65d4a6941bd4c178849c"]
    },
    {
        _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd36"),
        username: "danning", 
        password: "password"
    }
]

module.exports = seedUsers;