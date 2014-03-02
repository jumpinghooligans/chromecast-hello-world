var mongoose = require('mongoose');

exports.userList = function(callback) {

	var User = mongoose.model("User");

	User.find({}, function(err, users) {
		if(err) {
			console.log(err);
		} else {
			callback(users);
		}
	});

}