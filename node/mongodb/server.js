
const express= require('express');
const app=express();
const mongodb= require('./database');

app.get('/data',function (req,res) {
    mongodb.InsertDocs(function (data) {
        console.log(data);
        res.send(data);

    })

})
app.listen(5000,function(){
    console.log("server listening on 5000");
mongodb.Connection();
})