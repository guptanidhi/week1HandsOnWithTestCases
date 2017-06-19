/*Q9:  Write a javascript code to perform Fibonacci series. */


var a = 0, b = 1, f = 1, n = 10;
var fibonacci = "";
// console.log("Fibonacci Series for n=10 digits: ");
for(var i = 2; i <= n; i++) {
  f = a + b;
  a = b;
  b = f;
  if(i==2){
  	fibonacci = f;
  	continue;
  }
  fibonacci += ","+f;	  
}
console.log(fibonacci)
module.exports = fibonacci;