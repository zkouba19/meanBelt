app.controller('dashboardController', ['$scope', '$location', 'orderFactory', 'customerFactory', 'productFactory', function($scope, $location, orderFactory, customerFactory, productFactory){
	$scope.orders = [];
	$scope.customers = [];
	$scope.products = [];
	var index = function(){
		orderFactory.index(function(data){
			console.log(data);
			$scope.orders = data;
		})
	}
	var index = function(){
		customerFactory.index(function(data){
			console.log(data);
			$scope.customers = data;
		})
	}
	var index = function(){
		productFactory.index(function(data){
			console.log(data);
			$scope.products = data;
		})
	}
	index();
}]);
