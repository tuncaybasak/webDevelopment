// JavaScript functions are defined with the function keyword
console.log("## functions ##")
function myFunction(a, b) {
  return a * b;
}

console.log(myFunction(2,3));
console.log();

console.log("## anonymous functions ##"); //a function without a name
var x = function (a, b) {return a * b};
var z = x(4, 3);
console.log(z);
console.log();

console.log("## The Arguments Object ##");
// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).

x = sumAll(1, 123, 500, 115, 44, 88);
console.log(x);

function sumAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
