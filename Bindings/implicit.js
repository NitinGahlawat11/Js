var obj={
    name: "nitin",
    getname: function(){
        console.log(this.name);
    }
}
var obj1={
    name: "Xyz",
    getname: function(){
        console.log(this.name);
    }
}

obj.getname(); //nitin
obj1.getname(); //xyz