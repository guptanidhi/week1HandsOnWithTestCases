/*Q2.  Create a Javascript code and Define the following variables in that script.
 
a. Define a String variable call yourName. Put your name in the variable.
b. Define a Numeric variable called luckyNumber with a value of 37.
c. Define a Numeric variable called salary with a value of 123.45.
d. Define a variable called ownACar. Assign it a boolean value of true.
e. Define a variable called interest. Do not assign it a value.

*/

let q2 = function(){
	const yourName = "Harry Potter";
	const luckyNumber = 37;	
	const salary = 123.45;	
	const ownACar = new Boolean(1);
	var interest;
	 
	// console.log("MyName\t\t:"+ yourName);
	// console.log("luckyNumber\t:"+ luckyNumber);
	// console.log("Salary\t\t:"+ salary);
	// console.log("Own a Car\t:"+ ownACar);
	// console.log("Interest\t:"+interest);
	return [yourName, luckyNumber, salary, ownACar, interest];
}
q2();
module.exports = q2;