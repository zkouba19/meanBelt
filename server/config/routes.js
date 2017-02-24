var QuestionController = require('./../controllers/questionsController.js');
var GameController = require('./../controllers/gamesController.js');
var UserController = require('./../controllers/usersController.js');

module.exports = function(app){
	app.get('/question', function(req, res){
		QuestionController.index(req, res);
	});
	app.post('/question', function(req, res){
		console.log("*********************", req.body);
		QuestionController.create(req, res);
	});
	app.get('/game', function(req, res){
		GameController.index(req, res);
	});
	app.post('/game', function(req, res){
		GameController.create(req, res);
	});
	app.get('/user', function(req, res){
		UserController.index(req, res);
	});
	app.post('/user', function(req, res){
		console.log('made it to post user route')
		UserController.create(req, res);
	});
}