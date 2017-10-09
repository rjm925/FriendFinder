var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var friends = [
	{
		name: "Bob",
		photo: "linkBob",
		scores: ["1", "3", "5", "4", "1", "2", "5", "4", "1", "3"]
	},
	{
		name: "John",
		photo: "linkJohn",
		scores: ["4", "2", "2", "1", "5", "3", "1", "5", "3", "4"]
	},
	{
		name: "Jane",
		photo: "linkJane",
		scores: ["2", "5", "1", "3", "2", "5", "3", "2", "4", "2"]
	},
	{
		name: "Tom",
		photo: "linkTom",
		scores: ["3", "1", "4", "5", "3", "1", "4", "1", "2", "5"]
	},
	{
		name: "Justin",
		photo: "linkJustin",
		scores: ["5", "4", "3", "2", "4", "4", "2", "3", "5", "1"]
	}
];

app.get("/", function (req, res){
	res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res){
	res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function (req, res){
	res.json(friends)
});

app.post("/api/new", function(req, res) {
	var newFriend = req.body;

	var userData = {
		name: newFriend.name,
		photo: newFriend.photo,
		scores: newFriend['scores[]']
	}

	friends.push(userData);

	res.json(newFriend);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});