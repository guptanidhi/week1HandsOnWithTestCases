/*Q1:  Write a JavaScript program that stores basic information like your Name, 
	Company Name and Designation in variable and 
	print the same on console as 
	“My Name is {name} I work in {company name} and my Designation is {designation}”.
*/

let q1 = function(name, companyName, designation){
	const name1 = name || "Nidhi";
	const companyName1 = companyName || "NIIT";
	const designation1 = designation || "Associate Tech Lead";
	let output = "My name is "+name1+". I work in "+companyName1+" and my Designation is "+designation1;
	// console.log(output);
	return output;
}
q1();
module.exports = q1;