/*Q7:  Write a JavaScript program to find the life stage of a person based on to 
the age group. The age group classification are as follows 
0 - 1	Infant 
2 - 3	Toddler
4 - 5	PreSchooler
6 - 12	Primary School Boy
13 - 19	Adolesent
20 - 35	Matured Person
36 - 55	Adult
56 + Senior Citizen
*/

let q7 = function(ageVariable){
	const age = ageVariable || 2;
	var string;
	if(age <= 1){
		string = "Infant";
	}else if(age <= 3){
		string = "Toddler";
	}else if(age <= 5){
		string = "PreSchooler";
	}else if(age <= 12){
		string = "Primary School Boy";
	}else if(age <= 19){
		string = "Adolesent";
	}else if(age <= 35){
		string = "Matured Person";
	}else if(age <= 55){
		string = "Adult";
	}else{
		string = "Senior Citizen";
	}
	// console.log("Age: "+age+" - "+string);
	return string;
}
q7();
module.exports = q7;