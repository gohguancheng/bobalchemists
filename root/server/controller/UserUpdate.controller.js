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
                                            { $push: {userCreations: [teaCardId]}}
                                            );
        res.status(200).json({
            status:"ok",
            message: "found and updated",
            data: findUpdateUser,
        })
        
    }catch(error){
        console.log("at /updateuserdata/newteacard/:id", error);
    }
});