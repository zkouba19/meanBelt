app.factory('gameFactory', ['$http', function($http){
	var factory = {};
	factory.index = function(callback){
		
	}
	factory.build = function(callback){
		$http.get('/question').then(function(returned_data){
			console.log(returned_data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}
	factory.create = function(newGame, callback){
		$http.post('/game', newGame).then(function(returned_data){
			console.log(returned_data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}


	return factory
}]);