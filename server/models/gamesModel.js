var mongoose = require('mongoose');
var Schema = mongoose.Schema
var GameSchema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	quesions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
	score: {type: Number, required: true},
	percentage: {type: Number, required: true}
});

var Game = mongoose.model('Game', GameSchema)