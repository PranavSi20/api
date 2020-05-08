const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Grievance = require("../models/grievances");

router.post("/submit", (req, res, next) => {
    const grievances = new Grievance({
      _id: new mongoose.Types.ObjectId(),
      gid: req.body.gid,
      wid: req.body.wid,
      eligibleForMeeting: req.body.eligibleForMeeting,
      time: req.body.time,
      date: req.body.date,
      address: req.body.address,
      summary: req.body.summary,
      review: req.body.review,
      status: req.body.status
      
    });
    user.save(function(err, user) {
      if (err) return console.error(err);
      console.log(" saved to grievance collection.");
    });
    res.redirect("/status");
  });






module.exports = router;
