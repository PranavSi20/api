const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

router.post("/signup", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
    address: req.body.address,
    country: req.body.country,
    mobile:req.body.mobile
  });
user.save();
});

module.exports = router;
