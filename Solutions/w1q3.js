/*Q3:  Write a JavaScript program to display the current day 
	and time in the following format mm/dd/yyyy?
*/

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
console.log(today);
module.exports = today;