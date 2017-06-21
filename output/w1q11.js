/*Q11:  Write a JavaScript program to check whether the given number is palindrome or not .
	Input – 12321
	Output – Palindrome.
	Input – 2345
	Output – Not palindrome.
*/

let q11 = function(number){
	// Declare temp variables
	var a,b,temp=0, result;
	// Declare & initialize numbers which we want to check its palindrome or not
	var no = number || 12321;
	b=no;
	// Put logic to reverse the number like 12345 should become 54321 & keep it in temp variable
	while(no>0)
	{
		a=no%10;
		no=parseInt(no/10);
		temp=temp*10+a;
	}
	// If input number and temp reverse variable are equal then 
	// the input number is Palindrome or else input number is Not Palindrome put this value in variable
	if(temp == b){
		result = "Palindrome number";
	}else{
		result = "Not Palindrome number";
	}
	// Print that input variable is Palindrome or Not
	// console.log(b+" is", result+".");
	return result
}
q11();
module.exports = q11;