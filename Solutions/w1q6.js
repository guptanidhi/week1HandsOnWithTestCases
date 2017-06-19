/*Q6:  Write a JavaScript program to find the largest of 5 numbers 
	using conditional statement .
*/

var a = -7;
var b = -988;
var c = 0;
var d = 11;
var e = 99;
var largestNumber = 0;
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
console.log("Largest number among "+a+", "+b+", "+c+", "+d+", "+e+" is "+largestNumber);
module.exports =  largestNumber;