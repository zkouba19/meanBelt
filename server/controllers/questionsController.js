var mongoose = require('mongoose');
var Question = mongoose.model('Question');
module.exports = {
	index: function(req, res){
		Question.find({}, function(err, questions){
			if(err){
				console.log("could not find questions");
			} else {
				console.log("Found questions");
				res.json({questions});
			}
		})
	},

	create: function(req, res){
		var data = req.body
		var newQuestion = new Question({question: data.question, answer: data.correct, options: [data.correct, data.fake1, data.fake2]});
		newQuestion.save(function(err){
			if(err){
				console.log("**********************************", err)
				console.log('could not create new Question');
			} else {
				console.log('able to create new question');
				res.json({message: "successfully created a new question"})
			}
		})
	}
}