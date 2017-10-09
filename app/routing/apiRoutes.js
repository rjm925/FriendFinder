var friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function (req, res){
		res.json(friends);
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
}