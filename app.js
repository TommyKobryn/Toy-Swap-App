var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var toy = require('./models/toys');
var fileUpload = require('express-fileupload');

mongoose.Promise = global.Promise;


//Connect to Mongoose server
mongoose.connect('mongodb://drako12:drako12@ds139267.mlab.com:39267/toys');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));


//define static elements on the website
app.use(express.static('public'));
app.use(express.static('bower_components'));



app.get('/toys' , function(req , res){
  console.log('getting toys');
toy.find({})
  .exec(function(err,toys){
    if(err){
      res.send('error');
    } else {
      console.log(toys);
      res.json(toys);
    }
  });
});

app.get('/toys/:id' , function(req , res){
  console.log('getting books');
toy.findOne({
    _id: req.params.id
  })
  .exec(function(err,toys){
    if(err){
      res.send('error');
    } else {
      console.log(toys);
      res.json(toys);
    }
  });
});


app.post('/toys' , function(req , res){
  var newToy = new toy();

  newToy.name = req.body.name;
  newToy.description = req.body.description;
  newToy.age = req.body.age;
  newToy.image = req.body.image;

  newToy.save(function(err,toys){
    if(err){
      res.send('error');
    } else {
      console.log(toys);
      res.send(toys);
    }
  });
});



app.put('/toys/:id', function(req , res){
  toy.findOneAndUpdate({
    _id : req.params.id },
  {$set:{name: req.body.name}},
  {$set:{description: req.body.description}},
  {$set:{age: req.body.age}},
  {$set:{image: req.body.image}},

    {upsert: true},
  function(err, newToy){
    if(err){
    console.log('error');
    } else {
      console.log(newToy);
      res.send(newToy);
    }
  });
});


app.delete('/toys/:id', function(req , res){
  book.findOneAndRemove({
    _id : req.params.id },
  function(err, newToy){
    if(err){
    console.log('error');
    } else {
      console.log(toy);
      res.send(newToy);
    }
  });
});






// application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });




app.listen(3000);
console.log('Server is running on port 3000');
