(function(){
	angular.module('Todo')
        .factory('Item', item);

		function item($http){
            var ref = "http://secret-escarpment-99471.herokuapp.com/item";



			function list(){
				return $http.get(ref).success(function(data){
					return data;
				});
			}

			function addOne(item){
				return $http.post(ref,item).success(function(data){
					return data;
				});
			}

			var service = {
			    list: list,
				addOne: addOne
			};
			return service;
        }
    }
)();



// showQuote();
//
// function showQuote(){
//     quote = "hello world";
//     return quote;
// };




// var returnObj2 = {
//     quote: quote
// };
// return returnObj2;


// var service = {
//     showQuote: showQuote
// };
// return service;
