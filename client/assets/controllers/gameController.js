app.controller('gameController', ['$scope', '$location', 'gameFactory', 'userFactory', function($scope, $location, gameFactory, userFactory){
	$scope.questions = [];
	$scope.user = "";
	var build = function(){
		gameFactory.build(function(data){
			console.log(data);
			userFactory.index(function(data){
				$scope.user = data
				console.log("duuuuuuuuuuuuude", $scope.user);
				console.log("duuuuuuuuuuuuude", data)
			})
			$scope.questions = data.questions
		})
	}
	build();
	$scope.submit = function(){
		console.log("#################", $scope)
		console.log($scope.question);
		// gameFactory.create($scope.answers, function(data){
		// 	console.log(data);
		// })
	}
}]);