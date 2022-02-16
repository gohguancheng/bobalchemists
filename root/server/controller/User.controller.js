// DEPENDENCIES
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/userData.js");
const seedUsers = require("../models/userData_seed");

// ROUTES (/api/registration/)
// post '/api/registration/' index
router.post("/check", async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    if (!foundUser) {
      res.status(200).json({
        message: "Username is available",
        isAvailable: true,
      });
    } else {
      res.status(200).json({
        message: "Username is taken",
        isAvailable: false,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//post '/api/registration/newUser' ---> route to create user account entered
router.post("/newUser", async (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  try {
    const newUser = {
      username: req.body.username,
      password: req.body.password,
    };
    const response = User.create(newUser);
    res.status(200).json({ data: response, status: "success" });
  } catch (error) {
    console.log(error);
  }
});

// post '/api/registration/seed' index ---> route to create seed users
router.post("/seed", async(req, res) => {
  try{
      await User.deleteMany({});
      const seeds = seedUsers.map((e) => {
        return {...e, password: bcrypt.hashSync(e.password, bcrypt.genSaltSync(10))}
       });
      console.log(seeds);
      const newUsers = await User.create(seeds);
      res.status(200).json({
          status:"ok",
          message:"users seeded",
          data: newUsers,
      });;
  }catch(error){
      console.log("at /registration/seed", error);
  }
});

module.exports = router;

