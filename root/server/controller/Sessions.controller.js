// DEPENDENCIES
const bcrypt = require("bcrypt");
const express = require("express");
const sessions = express.Router();
const User = require("../models/userData.js");

// ROUTES (api/sessions/)
// get 'api/sessions/authcheck'
sessions.get("/authcheck", async (req, res) => {
  if(!req.session.currentUser) {
    res.status(200).json({
      isAuthenticated: false,
    });
  } else {
    res.status(200).json({
      isAuthenticated: false,
    });
  }
});

// post 'api/sessions/login' index ---> checks login credentials
sessions.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    // console.log(req.body.username);
    if (!foundUser) {
      res.status(200).json({
        message: "Sorry, no user found",
        status: "Login Failure",
      });
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser;
        res.status(200).json({
          message: "Login successful",
          isAuthenticated: true,
          status: "Login Success",
          session: req.session,
        });
      } else {
        res.status(200).json({
          message: "password does not match",
          isAuthenticated: false,
          status: "Login Failure",
        });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// get 'api/sessions/logout'
sessions.get("/logout", async (req, res) => {
  req.session.destroy(() => {
    res.status(200).json();
  });
});

module.exports = sessions;

// {
//   message: "Logout successful",
//   isAuthenticated: false,
//   status: "Logout Success",
//   session: req.session,
// }