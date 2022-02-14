const mongoose = require("mongoose"); // require mongoose
const { Schema } = mongoose; // create a shorthand for the mongoose Schema constructor

// create a new Schema
const userSchema = new Schema(
    {
        username: {type:String, required:true, unique:true},
        password: {type:String, required:true},
        likedCreations: [ String ]
    },
    { timestamps: true }
)

const User = mongoose.model("user", userSchema)

module.exports = User;