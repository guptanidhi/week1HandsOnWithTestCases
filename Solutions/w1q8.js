/*Q8:  Write a JavaScript program which iterates from 1 to 50 and 
	counts the numbers divisible by 3.
*/

let q8 = function(name, companyName, designation){
	var count = 0;
 	for(var i=1;i<=50;i++){
		if(i%3 == 0){
			count++;
		}
	}
	// console.log("Counting for divisible by 3 number between 1 to 50 is "+count);
	return count;
}
q8();
module.exports = q8;