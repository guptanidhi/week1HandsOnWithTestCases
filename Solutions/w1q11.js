/*Q11:  Write a JavaScript program to check whether the given number is palindrome or not .
	Input – 12321
	Output – Palindrome.
	Input – 2345
	Output – Not palindrome.
*/

let q11 = function(number){
	var str = number || "12321";
	var result;
	var len = str.length;
	for ( var i = 0; i < Math.floor(len/2); i++ ) {
	  if (str[i] !== str[len - 1 - i]) {
	    result = "Not palindrome";
	  }else{
	  	result = "Palindrome";
	  }
	}
	console.log(number+" is", result+".");
	return result
}
q11();
module.exports = q11;