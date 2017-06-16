/*Q10: Write a javascript code to find the factorial of numbers from 11 to 20. */

let q10 = function(){
	var fact = 1;
	var factorialArray = [];
	for(var j=11;j<=20;j++){
		for(var i=1; i<=j; i++){
			fact= fact*i;
		}
		factorialArray.push(fact);
		// console.log("Factorial of "+j+" is "+fact)
	}
	return factorialArray.join("");
}
q10();
module.exports = q10;