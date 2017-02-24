var mongoose = require('mongoose');
var Game = mongoose.model('Game');
module.exports = {
	index: function(req, res){
		Game.find({}, function(err, games){
			if(err){
				console.log("could not find Games");
			} else {
				console.log("Found games");
				res.json({games});
			}
		})
	}
}