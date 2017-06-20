/*Q10: Write a javascript code to find the factorial of numbers from 11 to 20. */

var fact = 1;
var factorialArray = "";
for(var j=11;j<=20;j++){
	for(var i=1; i<=j; i++){
		fact= fact*i;
	}
	console.log("Factorial of "+j+" is "+fact);
	if(j==11){
		factorialArray = fact;
		continue;
	}
	factorialArray += ","+fact;
}
module.exports =  factorialArray;