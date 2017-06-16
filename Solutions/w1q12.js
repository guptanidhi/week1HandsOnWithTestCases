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
	var students_Mark_List = marksArray || [ ['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
	var Avg_marks = 0;
	var grade;
	for (var i=0; i<students_Mark_List.length; i++) {
		Avg_marks += students_Mark_List[i][1];
	}
	var avg = (Avg_marks/students_Mark_List.length);
	// console.log("The Average Grade of students are: " + avg);
	if (avg < 60){
		grade = "F";
	}else if (avg < 70) {
		grade = "D";
	}else if (avg < 80){
		grade = "C";
	} else if (avg < 90) {
		grade = "B";
	} else if (avg < 100) {
		grade = "A";
	}

	// console.log("Grade : "+grade);
	return [avg, grade];
}
q12();
module.exports = q12;