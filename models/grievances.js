var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrievanceSchema = new Schema({
  ObjectId :{
      type: String,
      required: true,
      unique: true,
  },
  _id:{
      type: String,
      required: true,
      unique: true,
  },
  gid:{
      type: String, 
      required: true,
      unique: true,
  },
  wid:{
      type: String,
      required: true,
      unique: true,
  },
  eligibleForMeeting: {
      type: Boolean,
      required: true,
  },
  time: {
      type: Number,
      required: true,
  },
  date: {
      type: Date,
      required: true,
  },
  address: {
      type: String,
      required: true,
  },
  summary:{
      type: String,
      required: true,
  },
  review:{
      type: String,
      required: true,
  },
  status: {
      type: String,
      required: true,
  }

});
module.exports = mongoose.model('Grievance', GrievanceSchema);
