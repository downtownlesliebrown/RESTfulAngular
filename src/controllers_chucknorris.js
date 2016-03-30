(function(){
    angular.module('routerApp')
    .controller('CNorris', ['Yoke', 'firstyoke', CNorrisCtrl]);

    function CNorrisCtrl(Yoke, firstyoke){
        var vm = this;

        //LOCAL VARIABLES

        //BOUND FUNCTIONS
        vm.getYokeConductor = getYokeConductor;

        //BOUND VALUES
        vm.retrievedYoke = {};

        //BOUND FUNCTION IMPLEMETATIONS

        vm.retrievedYoke = firstyoke.data;
        for(var i = 0; i < 6; i++){
            vm.retrievedYoke.value.joke = vm.retrievedYoke.value.joke.replace("&quot;","''");
        }

        function getYokeConductor(){
            Yoke.getYokeMusician().then(function(response){
                vm.retrievedYoke = response.data;
                for(var i = 0; i < 6; i++){
                    vm.retrievedYoke.value.joke = vm.retrievedYoke.value.joke.replace("&quot;","''");
                }
            });
        }
    }
})();
