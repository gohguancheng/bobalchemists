const mongoose = require("mongoose");

const teaCardInfo_Schema = new mongoose.Schema({
    name:{type: String, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'Users'},
    description:{type: String, default: "This person was too lazy to give a description."},
    base: [{type: Schema.Types.ObjectId, ref: 'Bases'}],
    flavour:[{type: Schema.Types.ObjectId, ref: 'Flavours'}],
    toppings:[{type: Schema.Types.ObjectId, ref: 'Toppings'}],
    dateCreated: {type: Date, min: '2000-01-01'},
});

module.exports = mongoose.model("TeaCards", teaCardInfo_Schema);