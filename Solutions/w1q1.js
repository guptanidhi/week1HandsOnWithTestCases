/*Q1:  Write a program to browse a text file from 
	your machine and display its contents on the console.
*/

var fs = require('fs'), filename = "data.txt";
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data)
});