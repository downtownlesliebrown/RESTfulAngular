(function(){
	angular.module('routerApp')
        .factory('Yoke', yoke);

		function yoke($http){
            var ref = "http://api.icndb.com/jokes/random";

			function getYokeMusician(){
				return $http.get(ref).success(function(data){
					return data;
				});
			}

			var service = {
                getYokeMusician: getYokeMusician
			};
			return service;
        }
    }
)();
