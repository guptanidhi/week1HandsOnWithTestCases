/*Q3:  Write a JavaScript program to display the current day 
	and time in the following format mm/dd/yyyy?
*/

// Get current date by new Date() in 1 variable like today
var today = new Date();  
// From today variable get only DATE like 4,20
var dd = today.getDate();  
// From today variable get Month and add 1 because it starts from 0 index
var mm = today.getMonth()+1;  
//  From today variable get year in YYYY format 
var yyyy = today.getFullYear();  
// Logic for appending 0 if date and month is less than 10 to show 6/6/2017 to 06/06/2017
if(dd<10)   
{  
  dd='0'+dd;  
}   
  
if(mm<10)   
{  
  mm='0'+mm;  
}   
today = mm+'/'+dd+'/'+yyyy;  
// Print date in this format mm/dd/yyyy
// console.log(today);
module.exports = today;