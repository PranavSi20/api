var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CasesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  }  
});

module.exports = mongoose.model('user', CasesSchema);
