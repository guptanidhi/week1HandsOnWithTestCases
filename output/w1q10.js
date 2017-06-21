/*Q10: Write a javascript code to find the factorial of numbers from 11 to 20. */

// Declare and initialize variable fact with 1 value
var fact = 1;
// Declare factorialString with empty string
var factorialString = "";
// Iterate loop from 11 to 20
for(var j=11;j<=20;j++){
	// Iterate loop from 1 to parent loop variable to find factorial
	for(var i=1; i<=j; i++){
		fact= fact*i;
	}
	// Print factorial of parent loop variable
	// console.log("Factorial of "+j+" is "+fact);
	// Append factorial value to factorialString variable
	if(j==11){
		factorialString = fact;
		continue;
	}
	factorialString += ","+fact;
}
module.exports =  factorialString;