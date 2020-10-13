// arrays are used to store multiple values in a single variable.
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log();

var cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);
console.log(cars[0]);

var points = new Array();     // Bad
var points = [];              // Good 

// Changing an Array Element
cars[0] = "Opel";
console.log(cars[0]);

// length 
console.log("## length ##");
console.log(cars.length);
console.log();

// How to Recognize an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof(fruits));

// if a variable is an array
console.log("## isArray ##");
console.log(Array.isArray(fruits));
console.log();

// converts an array to a string of (comma separated) array values.
console.log("## toString ##");
console.log(fruits.toString());
console.log();

// joins all array elements into a string.
console.log("## join ##");
console.log(fruits.join(" - "));
console.log();

// changes the first element in fruits to undefined
console.log("## delete ##");
delete fruits[0]; 
console.log(fruits.toString());
console.log();


