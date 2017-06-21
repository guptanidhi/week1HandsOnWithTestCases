/*Q2.  Create a Javascript code and Define the following variables in that script. 
	a. Define a String variable call yourName. Put your name in the variable.
	b. Define a Numeric variable called luckyNumber with a value of 37.
	c. Define a Numeric variable called salary with a value of 123.45.
	d. Define a variable called ownACar. Assign it a boolean value of true.
	e. Define a variable called interest. Do not assign it a value.
*/

let q2 = function(){
	// Declare string variable 'yourName' and initialize it with your name
	const yourName = "Harry Potter";
	// Declare numeric variable 'luckyNumber' and initialize it with 37
	const luckyNumber = 37;	
	// Declare numeric variable 'salary' and initialize it with 123.45
	const salary = 123.45;
	// Declare variable 'ownACar' and initialize it with Boolean value of true
	const ownACar = new Boolean(1);
	// Declare variable 'interest'
	var interest;

	return [yourName, luckyNumber, salary, ownACar, interest];
}
q2();
module.exports = q2;