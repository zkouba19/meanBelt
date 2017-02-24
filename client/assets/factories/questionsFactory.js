app.factory('questionFactory', ['$http', function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/question').then(function(returned_data){
			console.log(returned_data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}

	factory.create = function(newQuestion, callback){
		$http.post('/question', newQuestion).then(function(returned_data){
			console.log(returned_data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})

	}
	return factory
}]);