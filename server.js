var express = require("express");
var app     = express();
var path    = require("path");

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/node_modules'))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/view/main.html'));
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


app.listen(port);

console.log("Running at Port : " + port);