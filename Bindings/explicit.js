function hello(){
    console.log(this.getName());
}

var obj= {
    name: "nitin",
getName: function () {
    return this.name;

}
}
hello(); //hiii
hello.call(obj); ////nitin

function getName(){
    return "Hiii"


}
