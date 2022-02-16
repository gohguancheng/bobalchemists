const mongoose = require("mongoose"); // require mongoose
const { Schema } = mongoose; // create a shorthand for the mongoose Schema constructor

// create a new Schema
const userSchema = new Schema(
    {
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        userCreations: [{type: mongoose.Schema.Types.ObjectId, ref: "TeaCards"}],
        likedCreations: { type: Array, 'default': [] }
    },
    { timestamps: true }
)

const User = mongoose.model("users", userSchema)

module.exports = User;