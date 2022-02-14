// DEPENDENCIES
const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const User = require('../models/userData.js');

// ROUTES (/api/registration/)
// get '/api/registration/' index
router.get('/', async (req, res) => {
    res.send('Welcome to Registration Page!');
});

//post '/api/registration/newUser' ---> route to create user account entered
router.post('/newUser/', async (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  try {
    const newUser = { username: req.body.username, password: req.body.password };
    const response = User.create(newUser);
    res.status(200).json({ data: response, status: "success" });
  } catch (error) {
  console.log(error);
  }
});

module.exports = router;