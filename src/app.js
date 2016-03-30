(function(){
    angular.module('routerApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/todo');

        $stateProvider

        .state('todo', {
            url: '/todo',
            templateUrl: 'views/todo.html',
            controller: 'Todo as td'
        })

        .state('cnorris', {
            url: '/chucknorris',
            templateUrl: 'views/chucknorris.html',
            controller: 'CNorris as cn',
            resolve: {
                firstyoke: function(Yoke){
                    return Yoke.getYokeMusician();
                }
            }
        });
    });
})();
