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

const populate_seed = [
    {
        name: "a bunch of bases",
        getChosenBases: ["620b29891d0ef89dbe4554ed", "620b2683d4912d8146ccc251"]
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
        const populateBase = await PopulateTest.findOne().populate("getChosenBases");
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

module.exports = Router;