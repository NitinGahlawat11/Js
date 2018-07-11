var a=10;
function hello() {
    function world() {
        this.a = 50;
        console.log(this.a);
    }

    world();
}
hello();
console.log(a);
console.log(window);
// All the console statements will be printing 50 as value of a will remain 50 now, 10 no longer exist
