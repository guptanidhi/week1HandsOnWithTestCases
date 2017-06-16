/*Q3:  Write a JavaScript program to display the current day 
	and time in the following format mm/dd/yyyy?
*/

let q3 = function(name, companyName, designation){
	var today = new Date();  
	var dd = today.getDate();  	  
	var mm = today.getMonth()+1;   
	var yyyy = today.getFullYear();  
	if(dd<10)   
	{  
	    dd='0'+dd;  
	}   
	  
	if(mm<10)   
	{  
	    mm='0'+mm;  
	}   
	 
	today = mm+'/'+dd+'/'+yyyy;  
	// console.log(today);
	return today;
}
q3();
module.exports = q3;