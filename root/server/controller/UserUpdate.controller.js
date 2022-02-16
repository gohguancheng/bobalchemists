const express = require("express");
const Router = express.Router();
const User = require("../models/userData.js");

//put 'api/updateuserdata/newteacard/:id' ---> route is called after card is created.
Router.put("/newteacard/", async (req, res) => {

    const teaCardId = req.query.teacardid;
    const user = req.query.user;

    try{
        const findUpdateUser = await User.findOneAndUpdate(
                                            { username: user }, 
                                            { userCreations: [teaCardId]}
                                            );
        
    }catch(error){
        console.log(error);
    }
});