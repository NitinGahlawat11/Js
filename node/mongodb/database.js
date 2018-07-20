in mongodb data is stored in bson notaion(ie. binary)

upsert in mongo
combining update and insert operations is upsert



const mongo= require('mongodb').MongoClient;

const url= 'mongodb://localhost:27017';

const dbName='shopping';
let shopping;
function Connection () {
  mongo.connect(url,function (err,client) {
      //console.log(client);
  shopping = client.db(dbName);

  })
}

function InsertDocs(db){
    const collection=shopping.collection('documents');
collection.insertMany([
    {a:1},
    {b:51},
    {c:63}
],function (err,result) {
db(result);
})
}
module.exports={
    InsertDocs,
    Connection
}