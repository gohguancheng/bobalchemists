// DEPENDENCIES
const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const User = require('../models/userData.js');

// ROUTES (/users)
// get '/users' index
// router.get('/new/', async (req, res) => {
//     res.render('');
// });

//route to create user account entered
router.post('/add', async (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  try {
    const newUser = { username: req.body.username, password: req.body.password };
    User.create(newUser);
  } catch (error) {
  console.log(error);
  }
});

module.exports = router;