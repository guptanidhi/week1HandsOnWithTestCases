/*Q6:  Write a JavaScript program to find the largest of 5 numbers 
	using conditional statement .
*/

let q6 = function(a1, b1, c1, d1, e1){
	var a = a1 || -7;
	var b = b1 || -988;
	var c = c1 || 0;
	var d = d1 || 11;
	var e = e1 || 99;
	var largestNumber = 0;
	if(a > b){
		largestNumber = a;
	}else{
		largestNumber = b;
	}
	if(c > largestNumber){
		largestNumber = c;
	}
	if(d > largestNumber){
		largestNumber = d;
	}
	if(e > largestNumber){
		largestNumber = e;
	}	 
	// console.log("Largest number among "+a+", "+b+", "+c+", "+d+", "+e+" is "+largestNumber);
	return largestNumber;
}
q6();
module.exports = q6;