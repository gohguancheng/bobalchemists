const mongoose = require("mongoose");

const teaCardInfo_Schema = new mongoose.Schema({
    name:{type: String, required: true},
    createdBy: {type: String, required: true},
    description:{type: String, default: "This person was too lazy to give a description."},
    base: {type: mongoose.Schema.Types.ObjectId, ref: 'Bases'},
    flavour: {type: mongoose.Schema.Types.ObjectId, ref: 'Flavours'},
    toppings:[{type: mongoose.Schema.Types.ObjectId, ref: 'Toppings'}],
    likes: {type: Number, min: 0},
},
{
    timestamps: true
}
);

module.exports = mongoose.model("TeaCards", teaCardInfo_Schema);