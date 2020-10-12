
// JavaScript has dynamic types. The same variable can be used to hold different data types:
var x; //Now x is undefined
console.log(x);

x = 5; //Now x is a Number
console.log(x);

x = "John"; //Now x is a String
console.log(x);

// Numbers
console.log();
var x1 = 34.00;     // Written with decimals
console.log(x1);

var x2 = 34;        // Written without decimals
console.log(x2);

//Extra large or extra small numbers can be written with scientific (exponential) notation:
console.log();
var y = 123e5;      // 12300000
console.log(y);

var z = 123e-5;     // 0.00123
console.log(z);

// typeof 
console.log();
console.log("## typeof ##")
console.log(typeof(""));    // string
console.log(typeof(3.14));  // number

// null 
//In JavaScript null is "nothing" the data type of null is an object.
console.log();
console.log("## null ##");
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(typeof(person)); 

person = null;
console.log(typeof(person)); 

person = undefined;  
console.log(typeof(person)); 

console.log();
console.log("## Difference Between Undefined and Null ##");
console.log("typeof undefined is undefined"); 
console.log("typeof null is object");
console.log("null === undefined is false");
console.log("null == undefined is true");

console.log();
console.log("## Primitive Data ##");
console.log("string");
console.log("number");
console.log("boolean");
console.log("undefined");

console.log();
console.log(typeof("Tuncay"));
console.log(typeof(3));
console.log(typeof(false));
console.log(typeof(xx));

console.log();
console.log("## Complex Data ##");
console.log("The typeof operator can return one of two complex types: function, object");
console.log("The typeof operator returns object for objects, arrays, and null.");
console.log("he typeof operator return function for functions.");

console.log();
console.log(typeof({name:'John', age:34})); // Returns "object"
console.log(typeof([1,2,3,4]));             // Returns "object" (not "array", see note below)
console.log(typeof null);          // Returns "object"
console.log(typeof function myFunc(){});   // Returns "function"
