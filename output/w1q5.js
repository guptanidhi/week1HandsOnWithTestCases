/*Q5:  Write a program with two variables declared, a string and a letter. 
	Now count the number of occurrences of the specified letter within the string.
	Sample arguments : 'gmail.com', 'm'
	Expected output : 2
*/

// Declare and initialize string variable with 'gmail.com'
const str = "gmail.com";
// Declare and initialize letter variable with 'm'
const letter = "m";
// Declare and initialize count variable with 0
var letter_Count = 0;

// Iterate loop for string characters
for (var position = 0; position < str.length; position++){  
	// If String character is equal to letter and increase count variable by 1
	if (str.charAt(position) == letter){  
    letter_Count += 1;  
  }  
}
// Print count variable
// console.log("String is '"+str+"' & character count for "+letter+" is "+letter_Count);
module.exports =  letter_Count;