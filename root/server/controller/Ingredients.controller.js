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
Router.get("/base/seed", async (req, res) => {
  try {
    await Bases.deleteMany({});
    const newBase = await Bases.create(base_seed);
    res.status(200).json({
      status: "ok",
      message: "base seeded",
      data: newBase,
    });
  } catch (error) {
    console.log("at /base/seed", error);
  }
});

// get "/api/ingredients/flavours/seed"
Router.get("/flavours/seed", async (req, res) => {
  try {
    await Flavours.deleteMany({});
    const newFlavours = await Flavours.create(flavour_seed);
    res.status(200).json({
      status: "ok",
      message: "flavours seeded",
      data: newFlavours,
    });
  } catch (error) {
    console.log("at /flavours/seed", error);
  }
});

// get "/api/ingredients/toppings/seed"
Router.get("/toppings/seed", async (req, res) => {
  try {
    await Toppings.deleteMany({});
    const newToppings = await Toppings.create(toppings_seed);
    res.status(200).json({
      status: "ok",
      message: "toppings seeded",
      data: newToppings,
    });
  } catch (error) {
    console.log("at /toppings/seed", error);
  }
});

// get "/api/ingredients/new/bases/"
Router.post("/new/bases", async (req, res) => {
  try {
    const input = req.body;
    const newBase = await Bases.create(input);
    res.status(200).json({
      status: "ok",
      message: "base added",
      data: newBase,
    });
  } catch (error) {
    console.log("at /new/bases", error);
  }
});

// post "/api/ingredients/new/flavours"
Router.post("/new/flavourings", async (req, res) => {
  try {
    const input = req.body;
    const newFlavours = await Flavours.create(input);
    res.status(200).json({
      status: "ok",
      message: "flavours added",
      data: newFlavours,
    });
  } catch (error) {
    console.log("at /new/flavours", error);
  }
});

// get "/api/ingredients/new/toppings"
Router.post("/new/toppings/", async (req, res) => {
  try {
    const input = req.body;
    const newToppings = await Toppings.create(input);
    res.status(200).json({
      status: "ok",
      message: "toppings added",
      data: newToppings,
    });
  } catch (error) {
    console.log("at /new/toppings", error);
  }
});

// get "/api/ingredients/base"
Router.get("/base", async (req, res) => {
  try {
    const allBase = await Bases.find({});
    res.status(200).json({
      status: "ok",
      message: "base data gotten",
      data: allBase,
    });
  } catch (error) {
    console.log("at /base", error);
  }
});

// get "/api/ingredients/flavours"
Router.get("/flavours", async (req, res) => {
  try {
    const allFlavours = await Flavours.find({});
    res.status(200).json({
      status: "ok",
      message: "flavour data gotten",
      data: allFlavours,
    });
  } catch (error) {
    console.log("at /flavours", error);
  }
});

// get "/api/ingredients/toppings"
Router.get("/toppings", async (req, res) => {
  try {
    const allToppings = await Toppings.find({});
    res.status(200).json({
      status: "ok",
      message: "toppings data gotten",
      data: allToppings,
    });
  } catch (error) {
    console.log("at /toppings", error);
  }
});

// get "/api/ingredients/"
Router.get("/", async (req, res) => {
  try {
    const allBase = await Bases.find({});
    const allFlavours = await Flavours.find({});
    const allToppings = await Toppings.find({});

    res.status(200).json({
      status: "ok",
      message: "toppings data gotten",
      data: {
        bases: allBase,
        flavourings: allFlavours,
        toppings: allToppings,
      },
    });
  } catch (error) {
    console.log("at /", error);
  }
});

// post "/api/ingredients/delete/:id/bases"
Router.delete("/delete/:id/bases", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Bases.findByIdAndDelete(id);
    res.status(200).json({
      status: "ok",
      message: "indiv ingredient deleted",
      response: response,
    });
  } catch (error) {
    console.log("at /delete/:id", error);
  }
});

// post "/api/ingredients/delete/:id/flavourings"
Router.delete("/delete/:id/flavourings", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Flavours.findByIdAndDelete(id);
    res.status(200).json({
      status: "ok",
      message: "indiv ingredient deleted",
      response: response,
    });
  } catch (error) {
    console.log("at /delete/:id", error);
  }
});

// post "/api/ingredients/delete/:id/toppings"
Router.delete("/delete/:id/toppings", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Toppings.findByIdAndDelete(id);
    res.status(200).json({
      status: "ok",
      message: "indiv ingredient deleted",
      response: response,
    });
  } catch (error) {
    console.log("at /delete/:id", error);
  }
});

// put "/api/ingredients/update/bases/:id/"
Router.put("/update/bases/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedRes = await Bases.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    res.status(200).json({
      status: "ok",
      message: "base is edited",
      data: updatedRes,
    });
  } catch (error) {
    console.log("/update/bases/:id", error);
  }
});

// put "/api/ingredients/update/flavourings/:id/"
Router.put("/update/flavourings/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedRes = await Flavours.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    res.status(200).json({
      status: "ok",
      message: "flavour is edited",
      data: updatedRes,
    });
  } catch (error) {
    console.log("/update/flavourings/:id", error);
  }
});

// put "/api/ingredients/update/toppings/:id/"
Router.put("/update/toppings/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedRes = await Toppings.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    res.status(200).json({
      status: "ok",
      message: "topping is edited",
      data: updatedRes,
    });
  } catch (error) {
    console.log("/update/toppings/:id", error);
  }
});


// put "/api/ingredients/update/toppings/:id/"
Router.put("/update/toppings/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedRes = await Toppings.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    res.status(200).json({
      status: "ok",
      message: "topping is edited",
      data: updatedRes,
    });
  } catch (error) {
    console.log("at/update/:id", error);
  }
});

module.exports = Router;
