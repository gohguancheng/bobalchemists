const express = require("express");
const Router = express.Router();

//import ingredients
const Bases = require("../models/Ingredients/base");
const base_seed = require("../models/Ingredients/base_seed");

const Flavours = require("../models/Ingredients/flavour");
const flavour_seed = require("../models/Ingredients/flavour_seed");

const Toppings = require("../models/Ingredients/toppings");
const toppings_seed = require("../models/Ingredients/toppings_seed");

//ROUTES ('api/ingredients/')
// get "/api/ingredients/base/seed/"
Router.get("/base/seed", async(req, res) => {
    try{
        await Bases.deleteMany({})
        const newBase = await Bases.create(base_seed);
        res.status(200).json({
            status:"ok",
            message:"base seeded",
            data: newBase,
        });;
    }catch(error){
        console.log("at /base/seed", error);
    }
});

// get "/api/ingredients/flavours/seed"
Router.get("/flavours/seed", async(req, res) => {
    try{
        await Flavours.deleteMany({})
        const newFlavours = await Flavours.create(flavour_seed);
        res.status(200).json({
            status:"ok",
            message:"flavours seeded",
            data: newFlavours,
        });
    }catch(error){
        console.log("at /flavours/seed", error);
    }
});

// get "/api/ingredients/toppings/seed"
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

// get "/api/ingredients/base"
Router.get("/base", async(req, res) => {
    try{
        const allBase = await Bases.find({});
        res.status(200).json({
            status:"ok",
            message:"base data gotten",
            data: allBase,
        })
    }catch(error){
        console.log("at /base", error);
    }
});

// get "/api/ingredients/flavours"
Router.get("/flavours", async(req, res) => {
    try{
        const allFlavours = await Flavours.find({});
        res.status(200).json({
            status:"ok",
            message:"flavour data gotten",
            data: allFlavours,
        })
    }catch(error){
        console.log("at /flavours", error);
    }
})

// get "/api/ingredients/toppings"
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

// get "/api/ingredients/"
Router.get("/", async(req, res) =>{
    try{
        const allBase = await Bases.find({});
        const allFlavours = await Flavours.find({});
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