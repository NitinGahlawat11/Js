const express=  require('express'); //returns a fn definition
const app = express(); // returns an object

app.use('/',express.static("public")); // to host front end files we use express.static fn

app.get("/first",function (req,res){
        res.send("hello this is first page");
    }

);
app.get('/abc',function (req,res) {
    res.send(console.log(req.query));

})

app.listen(4200,function () {

    console.log("server is running");
})