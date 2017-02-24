var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html',
		controller: 'userController'
	})
	.when('/question', {
		templateUrl: 'partials/newQuestion.html',
		controller: 'questionController'
	})
	.when('/game', {
		templateUrl: 'partials/game.html',
		controller: 'gameController'
	})
	.otherwise({
		redirectTo: '/'
	})
})