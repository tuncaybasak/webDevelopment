console.log("## strict mode ##");
console.log();
// strict mode makes it easier to write "secure" JavaScript.
// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties
// With strict mode, you can not, for example, use undeclared variables.

// "use strict";
// myFunction();

// function myFunction() {
//   y = 3.14;   // This will also cause an error because y is not declared
// }

// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, 
// this will throw an error, making it impossible to accidentally create a global variable.

console.log("## let ##");
// ES6 introduced two important new JavaScript keywords: let and const
// Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope.

// Variables declared Globally (outside any function) have Global Scope.
// Variables declared Locally (inside a function) have Function Scope.
// let and const provide Block Scope variables (and constants) in JavaScript.

//Redeclaring a variable using the var keyword can impose problems.
console.log("var");
var x = 10;
// Here x is 10
console.log(x);
{
  var x = 2;
  // Here x is 2
  console.log(x);
}
// Here x is 2
console.log(x);
console.log();

//Redeclaring a variable inside a block will not redeclare the variable outside the block:
console.log("let");
var x = 10;
// Here x is 10
console.log(x);
{
  let x = 2;
  // Here x is 2
  console.log(x);
}
// Here x is 2
console.log(x);
console.log();

// var i = 5;
// for (var i = 0; i < 10; i++) {
//   // some statements
// }
// // Here i is 10

// let i = 5;
// for (let i = 0; i < 10; i++) {
//   // some statements
// }
// // Here i is 5

// Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed:
// var x = 2;       // Allowed
// let x = 3;       // Not allowed

console.log("## Hoisting ##");
//  You can use the variable before it is declared:
carName = "Volvo";
console.log(carName);
var carName;
console.log();


// variables defined with const behave like let variables, except they cannot be reassigned
console.log("## const ##");

// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

// Declaring a variable with const is similar to let when it comes to Block Scope.
// var x = 10;
// // Here x is 10
// {
//   const x = 2;
//   // Here x is 2
// }
// // Here x is 10

// Not Real Constants
// The keyword const is a little misleading.
// It does NOT define a constant value. It defines a constant reference to a value.
// Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// But you can NOT reassign a constant object:
// const car = {type:"Fiat", model:"500", color:"white"};
// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// redeclaring or reassigning an existing var or let variable to const, in the same scope, or in the same block, is not allowed:

// var x = 2;       // Allowed
// const x = 2;     // Not allowed
// {
//   let x = 2;     // Allowed
//   const x = 2;   // Not allowed
// }  

// const x = 2;     // Allowed
// {
//   const x = 3;   // Allowed
// }
// {
//   const x = 4;   // Allowed
// }