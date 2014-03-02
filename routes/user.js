
/*
 * GET users listing.
 */

var User = require('../models/user');

exports.list = function(req, res){
	User.userList(function(users) {
  		res.render('user/list', { title: 'Users', users: users });
	});
};