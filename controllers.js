(function(){
    angular.module('Todo')
    .controller('Todo', TodoCtrl);

    function TodoCtrl(Item){
        var vm = this;

        vm.items = [];
        vm.newItem = {
            title:'',
            description:''
        };

        Item.list().then(function(response){
			vm.items = response.data;
		});

        function addItem(){
            Item.addOne({title:vm.newItem.title, description:vm.newItem.description}).then(function(response){
                vm.newItem.id = response.data;
                vm.items.push(vm.newItem);
            });
        }

    }
})();

// showQuote();
// function showQuote() {
//     vm.newQuote = Item.showQuote();
//     alert(vm.newQuote);
// }
