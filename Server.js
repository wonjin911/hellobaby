var express = require("express");
var app     = express();
var path    = require("path");


app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/node_modules'))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/view/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/wonjin',function(req,res){
  res.sendFile(path.join(__dirname+'/view/wonjin.html'));
});

app.get('/wave',function(req,res){
  res.sendFile(path.join(__dirname+'/view/wave.html'));
});

app.get('/ball',function(req,res){
  res.sendFile(path.join(__dirname+'/view/ball.html'));
});

app.get('/tadpoles',function(req,res){
  res.sendFile(path.join(__dirname+'/view/tadpoles.html'));
});


app.listen(8000);

console.log("Running at Port 8000");