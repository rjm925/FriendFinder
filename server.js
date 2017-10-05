var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res){
	res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res){
	res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function (req, res){
	
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});