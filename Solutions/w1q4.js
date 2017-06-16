/*Q4:  WWrite a program that prints 
the first letter of the string in capital and remaining letters in small. 
*/

let q4 = function(name){
	const Name = name || "nidhi";
	const nameWithFirstCapitalLetter = Name.charAt(0).toUpperCase() + Name.slice(1);
	// console.log("Input "+Name);
	// console.log("Output "+nameWithFirstCapitalLetter);
	return nameWithFirstCapitalLetter;
}
q4();
module.exports = q4;