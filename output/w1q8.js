/*Q8:  Write a JavaScript program which iterates from 1 to 50 and 
	counts the numbers divisible by 3.
*/

// Declare & initialize variable count with 0 value 
var count = 0;
// Iterate loop from 1 to 50
for(var i=1;i<=50;i++){
	// If number is divisible by 3 and remainder is 0 then increment count by 1
	if(i%3 == 0){
		count++;
	}
}
// Print the count value;
// console.log("Counting for divisible by 3 number between 1 to 50 is "+count);
module.exports =  count;