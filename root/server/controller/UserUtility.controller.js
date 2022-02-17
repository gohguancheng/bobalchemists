const bcrypt = require("bcrypt");
const express = require("express");
const Router = express.Router();
const User = require("../models/userData.js");

//THESE ROUTES ARE NOT YET ACCESSIBLE
// ROUTES (/api/userdata/)
//get 'api/userdata/' ---> route only accesible by admin

//get 'api/userdata/admin/:id' ---> for listing admins

//put 'api/userdata/permissions/:id' ---> toggle permissons: only assessible by admin

//get 'api/userdata/creations/:id' ---> to populate and show creations
Router.get("/creations/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const populatedCreations = await User.findById(id)
          .populate("userCreations")
        res.status(200).json({
          status: "ok",
          message: "populated userData returned",
          data: populatedCreations,
        });
    } catch (error) {
        console.log(error);
    }
})
//get 'api/userdata/liked/:id'---> to populate and show liked

Router.get("/liked/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const populatedLikes = await User.findById(id)
          .populate("likedCreations")
        res.status(200).json({
          status: "ok",
          message: "populated userData returned",
          data: populatedLikes,
        });
    } catch (error) {
        console.log(error);
    }
})

//put 'api/userdata/edit/:id' ---> route is called for users to update name and other stuff
/* Router.put("/edit/:id", async (req, res) => {
    try{
        res.status(200).json({
            status:"ok",
            message: "found and updated",
            data: findUpdateUser,
        })
        
    }catch(error){
        console.log("at /updateuserdata/newteacard/:id", error);
    }
}); */

module.exports = Router;