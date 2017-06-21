/*Q12:  12. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade?
 
Student nameMarks
David 	80
Vinoth	77
Divya 	88
Ishitha	95
Thomas	68
 
 
Range	Grade
60		F
70		D
80		C
90		B
100		A
*/

let q12 = function(marksArray){
	// Declare and Initialize array [ ['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]]
	var students_Mark_List = marksArray || [ ['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
	// Declare and initialize total marks with 0 value
	var totalMarks = 0;
	// Declare variable grade
	var grade;

	// Iterate array and sum total marks
	for (var i=0; i<students_Mark_List.length; i++) {
		totalMarks += students_Mark_List[i][1];
	}
	// Find average totalMarks/array length
	var avg = (totalMarks/students_Mark_List.length);
	// Print average marks
	// console.log("The Average Grade of students are: " + avg);
	// initialize grade according to condition like if average is less than equal to 60 grade should be 'F' and so on
	if (avg <= 60){
		grade = "F";
	}else if (avg <= 70){
		grade = "D";
	}else if (avg <= 80){
		grade = "C";
	} else if (avg <= 90){
		grade = "B";
	} else if (avg <= 100){
		grade = "A";
	}
	// Print grade
	// console.log("Grade : "+grade);
	return [avg, grade];
}
q12();
module.exports = q12;