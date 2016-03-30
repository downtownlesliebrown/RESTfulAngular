(function(){
    angular.module('routerApp')
    .controller('Todo', TodoCtrl);

    function TodoCtrl(Item){
        var vm = this;

        //BOUND FUNCTIONS
        vm.addItem = addItem;
        vm.removeItem = removeItem;
        vm.setEdit = setEdit;
        vm.cancelEdit = cancelEdit;
        vm.saveEdit = saveEdit;

        //BOUND VALUES
        vm.items = [];
        vm.editMode = null;
        vm.currentItem = {
            id: '',
            title: '',
            description: ''
        };
        vm.newItem = {
            id:'',
            title:'',
            description:''
        };

        //BOUND FUNCTION IMPLEMENTATIONS


        Item.list().then(function(response){
			vm.items = response.data;
		});

        function addItem(){
            if(!vm.newItem.title || !vm.newItem.description){
				return;
            }
            Item.add({
                title:vm.newItem.title,
                description:vm.newItem.description
            }).then(function(response){
                vm.newItem.id = response.data;
                vm.items.push(vm.newItem);
                vm.newItem = {
                    id: '',
					title : '',
					description : ''
				};
            });
        }

        function removeItem(id){
            Item.remove(id).then(function(response){
                for(var i =0; i < vm.items.length; i++){
                    if(vm.items[i].id === id){
                        vm.items.splice(i, 1);
                        break;
                    }
                }
            });
        }

        function setEdit(item){
            vm.currentItem = item;
            vm.editMode = item.id;
        }

        function saveEdit(){
            console.log(vm.currentItem);
            Item.edit(vm.currentItem).then(function(response){
                for(var i =0; i < vm.items.length; i++){
                    if(vm.items[i].id === vm.currentItem.id){
                        vm.items[i].description = vm.currentItem.description;
                        vm.items[i].title = vm.currentItem.title;
                        break;
                    }
                }
            });
            vm.editMode = null;
        }

        function cancelEdit(){
            vm.editMode = null;
            vm.currentItem = {
                id: '',
                title: '',
                description: ''
            };
        }
    }
})();
