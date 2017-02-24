app.controller('userController', ['$scope', '$location', '$window', 'userFactory', function($scope, $location, $window, userFactory){
	$scope.user = ""
	var index = function(){
		$scope.user = userFactory.user
		if(!$scope.user){
			console.log('there is no user')
			var person = $window.prompt("enter Name to sing in");
			$scope.user = person
			console.log($scope.user);
			userFactory.create({name: $scope.user}, function(data){
				console.log(data);
				$scope.customers = data;
			})
		}

		
	}
	index();

	$scope.logout = function(){
		userFactory.logout(function(data){
			$scope.user = data
			$location.url('/');
			console.log("@@@@@@@@@@@@", $scope.user)
			index();

		})
	}
}]);