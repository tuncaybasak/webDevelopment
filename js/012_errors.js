console.log("## Throw and Try to Catch ##");
console.log();
// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

//statement allows you to create a custom error.
console.log("## throw ##");
console.log();
//throw "Too big";    // throw a text
//throw 500;          // throw a number

function controlNumber(x){
  try{
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err){
    console.log("Input is " + err);
  }
  finally{
    // finally statement lets you execute code, after try and catch, regardless of the result
    console.log("finished.");
  }
}

controlNumber("");
controlNumber("Pen");
controlNumber(3);
controlNumber(58);
console.log();

// Error Object Properties
// name	sets or returns an error name
// message sets or returns an error message (a string)

// Error Name Values
// EvalError	An error has occurred in the eval() function
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred

console.log("## range error ##");
var num = 1;
try {
  // A number cannot have 500 significant digits
  num.toPrecision(500);   
}
catch(err) {
  console.log(err.name);
  console.log(err.message);
  console.log();
}

// a variable that has not been declared
console.log("## Reference error ##");
var x;
try {
  x = y + 1;   // y cannot be referenced (used)
}
catch(err) {
  console.log(err.name);
  console.log(err.message);
  console.log();
}

// try to evaluate code with a syntax error.
console.log("## Syntax error ##");
try {
  eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
  console.log(err.name);
  console.log(err.message);
  console.log();
}

// you use a value that is outside the range of expected types
console.log("## Type error ##");
var num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  console.log(err.name);
  console.log(err.message);
  console.log();
}