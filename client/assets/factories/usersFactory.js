app.factory('userFactory', ['$http', function($http){
	var factory = {};
	factory.user = "";
	factory.index = function(callback){
		callback(factory.user);
	}

	factory.create = function(user, callback){
		factory.user = user.name
		$http.post('/user', user).then(function(returned_data){
			console.log(returned_data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}
	factory.logout = function(callback){
		factory.user = "";
		console.log(factory.user);
		if(typeof(callback) == 'function'){
      			callback(factory.user);
      	}
	}
	return factory
}]);