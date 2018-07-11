function ReadFile(wr){
    let path="xyz";
    console.log("reading started");
    setTimeout(function () {
wr(function (newPath) {
    console.log("Writing is done");
    console.log(newPath+ path);

});
    },1000);
console.log("reading ended");
}
ReadFile(function (data) {
    {
        data("www");

    }
});