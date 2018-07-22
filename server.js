var express = require("express");
var app     = express();
var path    = require("path");

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/node_modules'));
app.use('/home', express.static(__dirname + '/js'));
app.use('/home', express.static(__dirname + '/css'));
app.use('/home', express.static(__dirname + '/node_modules'));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/view/main.html'));
});

app.get('/home',function(req,res){
  res.sendFile(path.join(__dirname+'/view/home.html'));
});


app.listen(port);

console.log("Running at Port : " + port);