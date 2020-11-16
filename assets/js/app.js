var app = new Vue({
    el : '#app',
    data : {
        content : '',
        users : [
            {
                name : 'Agesta Putrama', 
            },
            {
                name : 'Muhammad Iqbal Mubarok', 
            },
            {
                name : 'Ruby Purwanti', 
            }
        ],
        button : 'add',
        index : '',
    },
    methods :{
        addUser : function(){
            this.users.push({
                name : this.content
            });
            this.content = '';
        },
        deleteUser : function(index){
            this.users.splice(index,1);
        },
        editUser : function(index){
            this.button = 'update';
            this.content = this.users[index].name;
            this.index = index;
        },
        updateUser : function(){
            this.users[this.index] = {name : this.content};
            this.button = 'add';
            this.content = '';
        }
    },
    
});