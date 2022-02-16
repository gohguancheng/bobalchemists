// this file is for testing stuff
const mongoose = require("mongoose");
const express = require("express");
const Router = express.Router();

const populateSchema = new mongoose.Schema({
    name: {type: String, required: true},
    getChosenBases:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Bases"
    }]
})

const PopulateTest = mongoose.model("Populate_test", populateSchema);

/* ["milk tea", "ovaltine", "chocolate milk", "coffee", "matcha" ] },
{ toppings: [ "tapioca boba", "brown sugar boba",  "pudding", "herbal jelly", "red bean" ] },
{ flavourings: [ "caramel", "earl grey", "brown sugar", "durian", "hazelnut" ] },] */
const populate_seed = [
    {
        name: "base1",
        getChosenBases: ["620b29891d0ef89dbe4554f4", "620b2683d4912d8146ccc251"]
    }
]

Router.get("/", async(req, res )=>{
    try{
        await PopulateTest.deleteMany({})
        const newPopulate = await PopulateTest.create(populate_seed);
        res.status(200).json({
            status:"ok",
            message:" seeded",
            data: newPopulate,
        });;
    }catch(error){
        console.log("at /populate", error);
    }
})

Router.get("/populate", async(req, res)=>{
    try{
        const populateBase = await PopulateTest.findOne().populate("getChosenBases","name");
        console.log("populated", populateBase.getChosenBases);
        res.status(200).json({
            status:"ok",
            message:" seeded",
            data: populateBase,
        });;
    }catch(error){
        console.log("at /populate/test", error)
    }
})

Router.put("/populateupdate", async()=>{

    const addBase = req.query.teacardid;
    const name = req.query.user;

    try{
        const findName = await PopulateTest.findOneAndUpdate(
            { name: name},
            { getChosenBases: ["620b29891d0ef89dbe4554f4"]},
        )
    }catch(error){
        console.log(error);
    }
})

module.exports = Router;