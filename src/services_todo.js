(function(){
	angular.module('routerApp')
        .factory('Item', item);

		function item($http){
            var ref = "http://secret-escarpment-99471.herokuapp.com/item";



			function list(){
				return $http.get(ref).success(function(data){
					return data;
				});
			}

			function add(item){
				return $http.post(ref,item).success(function(data){
					// return data;
				});
			}

			function remove(id){
				return $http.delete(ref + '/' + id).success(function(data){
					return data;
				});
			}

			function edit(currentItem){
				return $http.put(ref + '/' + currentItem.id, currentItem).then(function(data){
					return data;
				}, function(err){
					console.log(err);
				});
			}



			var service = {
			    list: list,
				add: add,
				remove: remove,
				edit: edit
			};
			return service;
        }
    }
)();
