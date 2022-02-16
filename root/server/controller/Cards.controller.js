const express = require("express");
const base_seed = require("../models/Ingredients/base_seed");
const Router = express.Router();

//import tea cards info
const TeaCardsInfo = require("../models/teaCardInfo");
const teaCardInfo_seed = require("../models/teaCardInfo_seed");

//ROUTES ('api/teacardsinfo/')
//get "api/teacardsinfo/seed"
Router.get("/seed", async (req, res) => {
  try {
    await TeaCardsInfo.deleteMany({});
    const seedCards = await TeaCardsInfo.create(teaCardInfo_seed);
    res.status(200).json({
      status: "ok",
      message: "tea cards seeded",
      data: seedCards,
    });
  } catch (error) {
    console.log("at teacardsinfo/seed", error);
  }
});

//get "api/teacardsinfo"
Router.get("/", async (req, res) => {
  try {
    const populatedCards = await TeaCardsInfo.find({})
      .populate("base", ["name", "img"])
      .populate("flavour", ["name", "img"])
      .populate("toppings", ["name", "img"]);
    res.status(200).json({
      status: "ok",
      message: "populated teaCards returned",
      data: populatedCards,
    });
  } catch (error) {
    console.log(error);
  }
});

//get "api/teacardsinfo/show/:id"
Router.get("/show/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const populatedOneCard = await TeaCardsInfo.findById(id)
      .populate("createdBy", "username")
      .populate("base", ["name", "img"])
      .populate("flavour", ["name", "img"])
      .populate("toppings", ["name", "img"]);
    res.status(200).json({
      status: "ok",
      message: "populated one teaCard",
      data: populatedOneCard,
    });
  } catch (error) {
    console.log("at show/:id", error);
  }
});

//post "api/teacardsinfo/newCard"
Router.post("/newcard", async (req, res) => {
  const newCard = req.body;
  if (!newCard) {
    res.status(400).json({
      status: "error",
      message: "please add the card",
    });
  }
  try {
    const createNewCard = await TeaCardsInfo.create(newCard);
    res.status(200).json({
      status: "ok",
      message: "new Card created",
      data: createNewCard,
    });
  } catch (error) {
    console.log("at /newCard", error);
  }
});

//delete "api/teacardsinfo/delete/:id"
Router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await TeaCardsInfo.findByIdAndDelete(id);
    res.status(200).json({
      status: "ok",
      message: "indiv card deleted",
      data: null,
    });
  } catch (error) {
    console.log("at /delete/:id", error);
  }
});

module.exports = Router;
