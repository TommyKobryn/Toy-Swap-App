var mongoose = require('mongoose');

//define
var typeSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  create_date:{
    type: Date,
    default : Date.now
  }
});

var Genre = module.exports = mongoose.model('type', 'typeSchema');

// get type
