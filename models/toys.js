const Schema = require('mongoose').Schema;
var mongoose = require('mongoose');
var toy = mongoose.Schema;

var ToySchema = new Schema({
  name: String,
  description : String,
  age : String,
  image : String,
  date : { type: Date, default: Date.now },
});

module.exports = mongoose.model('toy',ToySchema);
