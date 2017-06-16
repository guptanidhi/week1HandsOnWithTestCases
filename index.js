/*const name = "Nidhi";
const companyName = "NIIT";
const designation = "Associate Tech Lead";

console.log("My name is "+name+". I work in "+companyName+" and my Designation is "+designation+".");*/

 
/*var yourName = "Harry Potter";
var luckyNumber = 37;	
var salary = 123.45;	
var ownACar = new Boolean(1);
var interest;
 
console.log("MyName\t\t:"+ yourName);
console.log("luckyNumber\t:"+ luckyNumber);
console.log("Salary\t\t:"+ salary);
console.log("Own a Car\t:"+ ownACar);
console.log("Interest\t:"+interest);*/

 
/*var today = new Date();  
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
console.log(today);  */



/*const firstName = "nidhi";
const lastName = "gupta";

console.log("My name is "+firstName.charAt(0).toUpperCase() + firstName.slice(1)+" "+lastName.charAt(0).toUpperCase() + lastName.slice(1)+".");*/

/*var str = "Nidhi";
var letter = "d";
var letter_Count = 0;

for (var position = 0; position < str.length; position++){  
  if (str.charAt(position) == letter){  
    letter_Count += 1;  
  }  
}
console.log("String is "+str+" & character count for d is "+letter_Count);*/


/*var a = -7;
var b = -988;
var c = 0;
var d = 11;
var e = 99;
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

console.log("Largest number among "+a+", "+b+", "+c+", "+d+", "+e+" is "+largestNumber);*/

/*const age = 2;
console.log("Age: "+age)
if(age <= 1){
	console.log("Infant");
}else if(age <= 3){
	console.log("Toddler");
}else if(age <= 5){
	console.log("PreSchooler");
}else if(age <= 12){
	console.log("Primary School Boy");
}else if(age <= 19){
	console.log("Adolesent");
}else if(age <= 35){
	console.log("Matured Person");
}else if(age <= 55){
	console.log("Adult");
}else{
	console.log("Senior Citizen")
}*/

/*var count = 0;

for(var i=1;i<=50;i++){
	if(i%3 == 0){
		count++;
	}
}
console.log("Counting for divisible by 3 number between 1 to 50 is "+count);*/


/*var a = 0, b = 1, f = 1, n = 10;
console.log("Fibonacci Series for n=10 digits: ");
for(var i = 2; i <= n; i++) {
  f = a + b;
  a = b;
  b = f;
  console.log(f)
}*/

/*var fact = 1;
for(var j=11;j<=20;j++){
	for(var i=1; i<=j; i++){
		fact= fact*i;
	}
	console.log("Factorial of "+j+" is "+fact)
}*/

/*function palindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return "Not palindrome";
        }
    }
    return "Palindrome";
}*/

/*var str = "12321";
var result;
var len = str.length;
for ( var i = 0; i < Math.floor(len/2); i++ ) {
  if (str[i] !== str[len - 1 - i]) {
    result = "Not palindrome,";
  }else{
  	result = "Palindrome.";
  }
}
console.log("12321 is", result);
str = "2345";
len = str.length;
for ( var i = 0; i < Math.floor(len/2); i++ ) {
  if (str[i] !== str[len - 1 - i]) {
    result = "Not palindrome.";
  }else{
  	result = "Palindrome.";
  }
}
console.log("2345 is", result);*/

 
/*var students_Mark_List = [ ['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var Avg_marks = 0;
for (var i=0; i<students_Mark_List.length; i++) {
	Avg_marks += students_Mark_List[i][1];
}
var avg = (Avg_marks/students_Mark_List.length);
console.log("The Average Grade of students are: " + avg);
if (avg < 60){
	console.log("Grade : F");
}else if (avg < 70) {
	console.log("Grade : D");
}else if (avg < 80){
	console.log("Grade : C");
} else if (avg < 90) {
	console.log("Grade : B");
} else if (avg < 100) {
	console.log("Grade : A");
}*/

/*var stringArray = ["Apple" ,"Cat", "Ball", "Dog", "Zebra", "Fish", "Elephant"];
console.log("Input Array: ", stringArray);
stringArray.sort(function(a,b) {
  if ( a < b )
      return -1;
  if ( a > b )
      return 1;
  return 0;
});
console.log("Ascending Order: ", stringArray);
stringArray.sort(function(a,b) {
  if ( a < b )
      return 1;
  if ( a > b )
      return -1;
  return 0;
});
console.log("Descending Order: ", stringArray);*/

/*var obj = {"One":"1","Two":"2","Three":"3","Four":"4"};
var valueArray = [];
for (var key in obj) {
  valueArray.push(obj[key]);
}
console.log("Input: ", obj);
console.log("Output: ", valueArray);*/

 
/*class MyData {
	constructor() {
		this.Array = [];
	}
	add(data) {
		this.Array.push(data);
	}
	remove(data) {
		this.Array = this.Array.filter(current => current !== data);
	}
}
 
const Array = new MyData();
Array.add(101);
Array.add(5);
Array.add(23);
Array.add(-5);
Array.add(31);
Array.add(46);
Array.add(5);
Array.add(5);
Array.add(6);
Array.add(59);
Array.add(5);
console.log("Original Array:", Array);
Array.remove(5);
console.log("Modified Array:", Array);*/


/*const charArray = ['e', 'z', 'a', 'j', 'b', 'd', 'f', 'g', 'o'];
var vowelArray = [];
var consonentArray = [];

for(var i=0;i<charArray.length;i++){
	if(charArray[i] === 'a' || charArray[i] === 'e' || charArray[i] === 'i' || charArray[i] === 'o' || charArray[i] === 'u' || false){
		vowelArray.push(charArray[i]);
	}else{
		consonentArray.push(charArray[i]);
	}
}
console.log("Input Array: ", charArray);
vowelArray.sort(function(a,b) {
  if ( a < b )
      return -1;
  if ( a > b )
      return 1;
  return 0;
});
console.log("Vowel Array: ", vowelArray);

consonentArray.sort(function(a,b) {
  if ( a < b )
      return -1;
  if ( a > b )
      return 1;
  return 0;
});
console.log("Consonent Array: ", consonentArray);*/


/*const a = [1,7], b = [3,4], c = [9,10];
const array = [a,b,c];
const totalSumArray = [];
console.log("Input Array: a = ", a);
console.log("Input Array: b = ", b);
console.log("Input Array: c = ", c);

for(var j=0;j<array.length;j++){
	var totalSum = 0;
	for(var i=0;i<array[j].length;i++){
		totalSum += array[j][i];
	}
	totalSumArray.push(totalSum);
}

var max = totalSumArray[0];
var maxIndex = 0;
for(var i = 1; i < totalSumArray.length; i++) {
  if(totalSumArray[i] > max) {
    maxIndex = i;
    max = totalSumArray[i];
  }
}
console.log("Output Array:", array[maxIndex]);*/

/*const array = [1,2,3,4,1,3,4,5,6,7,8];
console.log("Input Array: ", array);

var duplicateElementArray = [];
for(var i=0;i<array.length;i++){
	for(var j=i+1;j<array.length;j++){
		if(array[i] == array[j]){
			duplicateElementArray.push(array[i])
		}
	}
}
console.log("Output Array: ",duplicateElementArray);*/

/*var array = [4,5,10,11,14,17,18,19,21,23];
var newArray = [];
console.log("Input Array: ", array);

for(var i=0;i<array.length;i++){
	var isPrime = true;
	for(var j = 2; j < array[i]; j++){
		if(array[i] % j === 0){
			isPrime = false;
			newArray.push(array[i]+10);
			break;
    }
	}
	if(isPrime)
		newArray.push(array[i]);
}
console.log("Output Array: ", newArray);*/

/*var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('String> ');
rl.prompt();
rl.on('line', function(line) {
	var objArray = {};
  var stringArray = line.split('');
  for(var i=0;i<stringArray.length;i++){
  	if(stringArray[i] == " "){
  		continue;
  	}
  	if(!objArray[stringArray[i]]){
  		objArray[stringArray[i]] = i;
  	}else{
  		objArray[stringArray[i]] = objArray[stringArray[i]] + "," +i
  	}
  }
  var output = "";
  for(var key in objArray){
  	output += ", " +key+"=["+objArray[key]+"]";
  }
  output = output.substr(1);
  console.log("Output>", output);  
  rl.close();
}).on('close',function(){
    process.exit(0);
});*/

/*var numberArray = [4,3,6,9,4,8,3,5,8,4];
var count = 0;
var temp;
console.log("Input Array", numberArray);
for(var i=0;i<numberArray.length;i++){
	if(temp === undefined){
		temp = numberArray[i];
	}
	
	if(numberArray[i] == 4){
		if(i==0){
			count++;
		}
		if(temp != numberArray[i]){
			count++;
		}
	}
	temp = numberArray[i];
}
console.log("Count "+count);
if(count == 3){
	console.log("true");
}else{
	console.log("false");
}
*/

/*const a = [[1, 2, 3], [1, 3]];
const b = [[7, 2, 3], [1]];

console.log("Input Array: ", a);
var count = 0;
for(var i=0;i<a.length;i++){
	if(a[i][0] == 1){
		count++;
	}
}
console.log("Counting array starting from 1 is", count);

console.log("Input Array: ", b);
count = 0;
for(var i=0;i<b.length;i++){
	if(b[i][0] == 1){
		count++;
	}
}
console.log("Counting array starting from 1 is", count);*/


/*var fs = require('fs'), filename = "data.txt";
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data)
});*/

/*var str = "webmaster";
function charInOrder(str)
{
	return str.split('').sort().join('');
}
console.log("Input String - ", str);
console.log("Output String - ",charInOrder(str));*/

/*function greatestCommonDivisor(a, b) {
  if (!b) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};
console.log(greatestCommonDivisor(7,49));*/

/*var friendsName = "Farook";
function displayNames(yourName){
	alert(yourName);
}
displayNames(friendsName);*/

/*var names = ["Harry", "Shearly", "Houston", "Daniel", "Popoyee", "Henry", "Fiona", "ewqsel"];
         
function findNames(arrayOfNames, index, letter) {
    var names = arrayOfNames.filter(function(word) {
     return word[index] === letter;
    });
    return names 
}

function thirdCharNsixthCharl(arrayOfNames){
	var names = arrayOfNames.filter(function(word){
		return word[2] === "n" && word[5] === "l";
	})
	return names;
}

function namesStartsWithH(arrayOfNames){
	var names = arrayOfNames.filter(function(word){
		return word[0] === "H";
	})
	return names;
}

console.log("Names with 3rd letter n and 6th letter l", thirdCharNsixthCharl(names));
console.log("Names starts with H", namesStartsWithH(names));
var result = [ findNames(names, 2, 'A') && findNames(names, 5, 'l'), findNames(names, 0, 'H')];
console.log("Desired Output: ",result);*/

/*var str = "Nidhi";
var letter = "i";
function char_count(str, letter)   
{  
 var letter_Count = 0;  
 for (var position = 0; position < str.length; position++)   
 {  
    if (str.charAt(position) == letter)   
      {  
      letter_Count += 1;  
      }  
  }  
  return letter_Count;  
}
console.log("String is "+str+" & character count for i is "+letter);
console.log(char_count(str, letter)); */


/*var array = [40,9,78,23,90];

function sumOfArray(array){
	var totalOfArray = 0;
	for(var i=0;i<array.length;i++){
		totalOfArray += array[i];
	}
	return totalOfArray;
}
console.log(sumOfArray(array));*/


/*function testPrime(n)
{
  if (n===1)
  {
    return false;
  }else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
console.log("Is 37 prime number - ",testPrime(37));*/

/*var array = [40,50,20,60,70,80,30,10,85,35];

function totalGreaterThanNo(numberArray, number){
	var total = 0;
	for(var i=0;i<numberArray.length;i++){
		if(numberArray[i] > number){
			total += numberArray[i];
		}
	}
	return total;
}
console.log("Input Array - "+array);
console.log("Total of array elements which are greater than 50 - ", totalGreaterThanNo(array, 50));*/

/*const inputDate1 = new Date("01-Oct-2016");
const inputDate2 = new Date("05-Oct-2016");
const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function checkDate(inputDate){
	let date = inputDate.getDate();
	let month = inputDate.getMonth();
	let year = inputDate.getFullYear();
	let formattedDate;
	if(date === 1){
		formattedDate = new Date(year, month, 0);
	}else{
		formattedDate = new Date(year, month+1, 0);
	}
	console.log("Input Date:", date+"-"+monthArray[month]+"-"+year);
	console.log("Output Date:", formattedDate.getDate()+"-"+monthArray[formattedDate.getMonth()]+"-"+formattedDate.getFullYear());
}

checkDate(inputDate1);
checkDate(inputDate2);*/

/*var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
console.log("Input String:",jsonStr);
var obj = JSON.parse(jsonStr);
console.log("Output Object:",obj);
console.log("Accessing Value like obj.mike: ", obj.mike);
console.log("Accessing Value like obj.jason: ", obj.jason);
console.log("Accessing Value like obj.chels: ", obj.chels);*/

/*const data = {
  "store": [{
      "s_id": "0093WRS21",
      "s_name": "Hi5"
  },   {
      "s_id": "54241QSUT",
      "s_name": "Jupiter"
  }],
  "Customer": [{
      "c_id": "C78305212",
      "c_name": "Alice"
  },   {
      "c_id": "C32160832",
      "c_name": "Scooby"
  },  {
      "c_id": "C06512389",
      "c_name": "Tom"
  }]
} 
console.log("\t\tStore Details");
for (i in data.store) {
	console.log(data.store[i]);
}
console.log("\t\tCustomer Details");
for(i in data.Customer){
	console.log(data.Customer[i]);
}
console.log("Second Store ID:",data.store[1].s_id);
console.log("Customer Name:");
for(i in data.Customer){
	console.log(data.Customer[i].c_name);
}
delete data.Customer;
console.log("Remove all details excluding Store detail", data);*/

/*function cost(amount){
	this.price = amount;
}
 
function book(title, author){
	this.title = title;
	this.author = author;
	this.cost = cost;
}
 
var myBook = new book("Harry Potter", "J. K. Rowling");
myBook.cost(250);
console.log("\t\tBooks Inventory")
console.log("Book title : " + myBook.title);
console.log("Book author : " + myBook.author);
console.log("Book price : " + myBook.price);*/

/*var cityJson = [
	{
		"city": "Indore",
		"pincode": 452001
	},
	{
		"city": "Bangalore",
		"pincode": 560001
	},
	{
		"city": "Agra",
		"pincode": 282001
	},
	{
		"city": "Delhi",
		"pincode": 110001
	},
	{
		"city": "Mumbai",
		"pincode": 400001
	},
]

function sortByCityName(i,j){  
 	if(i.city < j.city)  
  	return -1;  
 	if(i.city > j.city)  
  	return 1;  
 return 0;  
} 
console.log("Sort by City Name: \n" ,cityJson.sort(sortByCityName));

function sortByPincode(i,j){  
 	if(i.pincode < j.pincode)  
  	return -1;  
 	if(i.pincode > j.pincode)  
  	return 1;  
 return 0;  
} 
console.log("Sort by Pincode: \n" ,cityJson.sort(sortByPincode));

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('City Name> ');
rl.prompt();
rl.on('line', function(line) {
	var pincode;
	for(var key in cityJson){
		if(line.toLowerCase() === cityJson[key]["city"].toLowerCase()){
			pincode = cityJson[key]["pincode"];
			break;
		}else{
			pincode = "Not Found."
		}
	}
	console.log(line+" pincode-", pincode);  
  rl.close();
}).on('close',function(){
    process.exit(0);
});*/


/*var films = [
	{ film: 'lagaan', rating: '5stars', year: 2003},
	{ film: 'Bahubali', rating: '4stars', year: 2015},
	{ film: 'godfather', rating: '3stars', year: 1990}
];

function sortByName(i,j)  
 {  
 if (i.film < j.film)  
   return -1;  
 if (i.film > j.film)  
   return 1;  
 return 0;  
} 
console.log("Sort by Film Name: \n" ,films.sort(sortByName));  

function sortByYear(u,v)
{
  if(u.year < v.year)
    return -1;
  if(u.year > v.year)
    return 1;
  return 0;
}
console.log("Sort by Year: \n" , films.sort(sortByYear));*/

/*var people = [
{
	fname:'Harry',
	lname:'Potter',
	id:14637,
	hireDate:new Date(1999,2,4)
},
{
	fname:'Jane',
	lname:'Doe',
	id:29384,
	hireDate:new Date(2003,4,13)
},
{
	fname:'John',
	lname:'Asle',
	id:39922,
	hireDate:new Date(2004,11,20)
},
{
	fname:'Jackie',
	lname:'Chan',
	id:83736,
	hireDate:new Date(2014,7,4)
}
];
 
function hiredafter2014(person) {
	var jan14 = new Date(2014,1,1);
	return person.hireDate >= jan14;
}
 
var firstPersonHiredAfter2014 = people.find(hiredafter2014);
console.log('The first person hired after 1/1/2014 is ' + firstPersonHiredAfter2014.fname + ' ' + firstPersonHiredAfter2014.lname);
console.log();

function hasId(person, id) {
	return person.id === id;
}
var idToFind = 83735;
console.log("Person with this id: "+idToFind);
var person = people.find(function(p) {	
	return hasId(p, idToFind);
});
if (typeof person != 'undefined') {
	console.log(person.fname + " " + person.lname + " has id " + idToFind);
} else {
	console.log("person not found");
}
console.log();
 
var idToFind2 = 39922;
console.log("Person with this id: "+idToFind2);
var person2 = people.find(function(p) {
	return hasId(p, idToFind2);
});
if (typeof person2 != 'undefined') {
	console.log(person2.fname + " " + person2.lname + " has id " + idToFind2);
} else {
	console.log("person not found");
}*/

/*const nums = [11.21, 25.6, 31.3, 47.976, -1.90, .99];
 
const roundValues = nums.map(Math.round);
console.log("Round Values:"+roundValues);

const people = [
	{fname:'Marla', lname:'Jayson'},
	{fname:'Jack', lname:'Pill'},
	{fname:'Eric', lname:'owen'},
	{fname:'James', lname:''}
];
function getFullName(person) {
	return person.fname + ' ' + person.lname;
}
const fullNames = people.map(getFullName);
console.log("Full Names:"+fullNames);*/
