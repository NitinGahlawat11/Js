


const server = require('express');
const path= require('path');
const app = server();
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'views'));
 app.get('/all',function (req,res) {
     res.render('index',{todo:'apple'},show:true);

 });
 app.listen(5000,function (req,res) {
     console.log("server is running");

 });