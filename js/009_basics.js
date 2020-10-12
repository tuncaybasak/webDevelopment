// function to find out if an expression (or a variable) is true
console.log("## Boolean ##");
console.log(Boolean(10>9));
console.log();

// Everything With a "Value" is True
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("Hello"));
console.log(Boolean('false'));
console.log(Boolean(1 + 7 + 3.14));
console.log();

//Everything Without a "Value" is False
var x = 0;
console.log(Boolean(x));
var x = -0;
console.log(Boolean(x));
var x = "";
console.log(Boolean(x));
var x; //unefined
console.log(Boolean(x));
var x = null;
console.log(Boolean(x));
var x = false;
console.log(Boolean(x));
var x = 10 / "H"; //Nan
console.log(Boolean(x));
console.log();

console.log("## Conditional (Ternary) Operator ##");
var voteable = (7 < 18) ? "Too young":"Old enough";
console.log(voteable);
console.log();

console.log("## if else ##");
var greeting;
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);
console.log();

console.log("## switch ##");
var text;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);
console.log();

console.log("## For Loop ##");
for (i = 0; i < 5; i++) {
  console.log("The number is " + i);
}
console.log();

// for/in statement loops through the properties of an object
console.log("## The For/In Loop ##");
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x] + " ";
}
console.log(text);
console.log();

// for/of statement loops through the values of an iterable objects
// lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
console.log("## The For/Of Loop ##");
var cars = ['BMW', 'Volvo', 'Mini'];
var x;
for (x of cars) {
  console.log(x);
}
console.log();

console.log("## while Loop ##");
var i = 0;
while (i < 4) {
  console.log(i);  
  i++;
}
console.log();

console.log("## do while Loop ##");
do {
  console.log("The number is " + i);
  i++;
}
while (i < 10);
console.log();


// The break statement "jumps out" of a loop
console.log("## Break Statement ##");
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log("The number is " + i);
}
console.log();


// statement breaks one iteration (in the loop), if a specified condition occurs, 
// and continues with the next iteration in the loop.
var i = 0;
console.log("## Continue  Statement ##");
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  console.log("The number is " + i);
}
console.log();



