var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

	username : String,
	password : String

});

mongoose.model("User", userSchema);

mongoose.connect("mongodb://localhost/chromecast-hello-world");