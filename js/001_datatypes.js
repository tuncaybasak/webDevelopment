
// JavaScript has dynamic types. The same variable can be used to hold different data types:

//Now x is undefined
var x;
console.log(x);

//Now x is a Number
x = 5; 
console.log(x);

//Now x is a String
x = "John"; 
console.log(x);

// Numbers
console.log();
// Written with decimals
var x1 = 34.00;    
console.log(x1);

var x2 = 34;        
// Written without decimals
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

// ## Difference Between Undefined and Null ##
// typeof undefined is undefined
// typeof null is object
// null === undefined is false
// null == undefined is true

// ## Primitive Data ##
// string
// number
// boolean
// undefined

console.log();
console.log(typeof("Tuncay"));
console.log(typeof(3));
console.log(typeof(false));
console.log(typeof(xx));
console.log(typeof Nan);
console.log();

// ## Complex Data ##
// The typeof operator can return one of two complex types: function, object
// The typeof operator returns object for objects, arrays, and null.
// typeof operator return function for functions.");

console.log();

// Returns "object"
console.log(typeof({name:'John', age:34})); 

// Returns "object" (not "array", see note below)
console.log(typeof([1,2,3,4]));             

// Returns "object"
console.log(typeof null);          

// Returns "function"
console.log(typeof function myFunc(){});   

