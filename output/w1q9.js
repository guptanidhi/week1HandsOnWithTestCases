/*Q9:  Write a javascript code to perform Fibonacci series. */

// Declare and initialize first variable by 0 and second variable by 1 & 
// temp variable for addition of 2 previous number
var a = 0, b = 1, f;
// Declare and initialize fibonacci series by 0,1 first 2 numbers of fibonacci series
var fibonacci = "0,1";
// console.log("Fibonacci Series for n=10 digits: ");
// Iterate loop from 1 to 10 and append addition of 2 previous number in fibonacci variable
for(var i = 1; i < 10; i++) {
  f = a + b;
  a = b;
  b = f;
  fibonacci += ","+f;	  
}
// Print fibonacci series like 0,1,1,2,3,5,8,13.....
// console.log(fibonacci)
module.exports = fibonacci;