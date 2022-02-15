const mongoose = require("mongoose");

const seedUsers = [
    {
        _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd34"),
        username: "guanch", 
        password:"password"
    },
    {
        _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd35"),
        username: "rizal", 
        password:"password"
    },
    {
        _id: mongoose.Types.ObjectId("620b3fdb42f6719ba12bfd36"),
        username: "danning", 
        password: "password"
    }
]

module.exports = seedUsers;