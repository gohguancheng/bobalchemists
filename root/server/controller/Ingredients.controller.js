const express = require("express");
const Router = express.Router();

//import ingredients
const Base = require("../models/Ingredients/base");
const base_seed = require("../models/Ingredients/base_seed");

const Flavour = require("../models/Ingredients/flavour");
const flavour_seed = require("../models/Ingredients/flavour_seed");

const Toppings = require("../models/Ingredients/toppings");
const toppings_seed = require("../models/Ingredients/toppings_seed");

Router.get("/base/seed", async(req, res) => {
    try{
        await Base.deleteMany({})
        const newBase = await Base.create(base_seed);
        res.status(200).json({
            status:"ok",
            message:"base seeded",
            data: newBase,
        });;
    }catch(error){
        console.log("at /base/seed", error);
    }
});

Router.get("/flavours/seed", async(req, res) => {
    try{
        await Flavours.deleteMany({})
        const newFlavours = await Flavour.create(flavour_seed);
        res.status(200).json({
            status:"ok",
            message:"flavours seeded",
            data: newFlavours,
        });
    }catch(error){
        console.log("at /flavours/seed", error);
    }
});

Router.get("/toppings/seed", async(req, res) => {
    try{
        await Toppings.deleteMany({})
        const newToppings = await Toppings.create(toppings_seed);
        res.status(200).json({
            status:"ok",
            message:"toppings seeded",
            data: newToppings,
        });
    }catch(error){
        console.log("at /toppings/seed", error);
    }
});

Router.get("/base", async(req, res) => {
    try{
        const allBase = await Base.find({});
        res.status(200).json({
            status:"ok",
            message:"base data gotten",
            data: allBase,
        })
    }catch(error){
        console.log("at /base", error);
    }
});

Router.get("/flavours", async(req, res) => {
    try{
        const allFlavours = await Flavour.find({});
        res.status(200).json({
            status:"ok",
            message:"flavour data gotten",
            data: allFlavours,
        })
    }catch(error){
        console.log("at /flavours", error);
    }
})

Router.get("/toppings", async(req, res) => {
    try{
        const allToppings = await Toppings.find({});
        res.status(200).json({
            status:"ok",
            message:"toppings data gotten",
            data: allToppings,
        })
    }catch(error){
        console.log("at /toppings", error);
    }
})

Router.get("/", async(req, res) =>{
    try{
        const allBase = await Base.find({});
        const allFlavours = await Flavour.find({});
        const allToppings = await Toppings.find({});
        
        res.status(200).json({
            status:"ok",
            message:"toppings data gotten",
            data: 
                { 
                    bases: allBase,
                    flavourings: allFlavours,
                    toppings: allToppings,
                }
        })
    }catch(error){
        console.log("at /", error);
    }
});

module.exports = Router;