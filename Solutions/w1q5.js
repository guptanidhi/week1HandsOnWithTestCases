/*Q5:  Write a program with two variables declared, a string and a letter. Now count the number of occurrences of the specified letter within the string.
	Sample arguments : 'gmail.com', 'm'
	Expected output : 2
*/

const str = "Nidhi Gupta";
const letter = "i";
var letter_Count = 0;
  
for (var position = 0; position < str.length; position++){  
  if (str.charAt(position) == letter){  
    letter_Count += 1;  
  }  
}
console.log("String is '"+str+"' & character count for "+letter+" is "+letter_Count);
module.exports =  letter_Count;