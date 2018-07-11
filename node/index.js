global.a=5;
let b=8;
//console.log(a+b);
/* function  sum() {
     z= a+b+10;
     return z;
 }
 module.exports={
//sum
   s:sum
}*/

// Taking Input from console log using process argv
function add() {
 //console.log(process.argv);
 var x= process.argv.slice(2);

 return parseInt(x[0])+parseInt(x[1]);

}
console.log(add());