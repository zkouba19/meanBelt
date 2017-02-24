app.controller('questionController', ['$scope', '$location', 'questionFactory', function($scope, $location, questionFactory){
	$scope.questions = [];
	var index = function(){
		questionFactory.index(function(data){
			console.log(data);
			$scope.questions = data.questions;
		})
	}
	index();

	$scope.create = function(){
		questionFactory.create($scope.question, function(data){
			console.log(data);
			$scope.question = {}
			index();
		})
	}

}]);