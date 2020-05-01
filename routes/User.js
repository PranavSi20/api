const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

router.post("/signup", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    wemail: req.body.wemail,
    wpassword: req.body.wpassword,
    wname: req.body.wname,
    wdob: req.body.wdob,
    wage: req.body.wage,
    wnearcity: req.body.wnearcity,
    waddress: req.body.waddress,
    wstate: req.body.wstate,
    wpincode: req.body.wpincode,
    wmobile: req.body.wmobile,
    woccupation: req.body.woccupation,
    wexperience: req.body.wexperience,
    wskill: req.body.wskill,
    wSecQue: req.body.wSecQue,
    wSecAns: req.body.wSecAns,
    wadhaar: req.body.wadhaar
  });
  user.save(function(err, user) {
    if (err) return console.error(err);
    console.log(" saved to user collection.");
  });
});

router.post("/login", function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({email:username}, function(err, foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        if(foundUser.password === password){
          console.log("logged in");
          res.render("Dashbord");
        }
      }
    }

  });
});

module.exports = router;
