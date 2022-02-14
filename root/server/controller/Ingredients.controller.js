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
        const newBase = await Base.create(base_seed);
        res.redirect("/base/");
    }catch(error){
        console.log("at /base/seed", error);
    }
})