/*Q6:  Write a JavaScript program to find the largest of 5 numbers 
	using conditional statement .
*/

// Declare and initialize 5 variables with value a=7, b=8, c=0, d=11, e=99
var a = 7;
var b = 8;
var c = 0;
var d = 11;
var e = 99;
// Declare variable for largestNumber with 0 value
var largestNumber = 0;
// Conditions if any number is greater than largestNumber 
// so largestNumber should replace with that largest number.
if(a > b){
	largestNumber = a;
}else{
	largestNumber = b;
}
if(c > largestNumber){
	largestNumber = c;
}
if(d > largestNumber){
	largestNumber = d;
}
if(e > largestNumber){
	largestNumber = e;
}
// Print Largest Number among a, b, c, d, e
// console.log("Largest number among "+a+", "+b+", "+c+", "+d+", "+e+" is "+largestNumber);
module.exports =  largestNumber;