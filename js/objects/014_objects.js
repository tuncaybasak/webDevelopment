//JavaScript objects are containers for named values called properties or methods.
var person = {
  firstName : "John",
  lastName : "Doe",
  id : 5596,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.firstName);

console.log(person["lastName"]);

console.log(person.id);

console.log(person.fullName());

console.log("## this ##");
console.log();
// In a method, this refers to the owner object.
// fullName : function() {
//   return this.firstName + " " + this.lastName;
// }

// Alone, this refers to the global object.
// var x = this;

// In a function, this refers to the global object.
// function myFunction() {
//   return this; //[object Window]
// }

// In a function, in strict mode, this is undefined.
// "use strict";
// function myFunction() {
//   return this; //undefined
// }

// In an event, this refers to the element that received the event.
// In HTML event handlers, this refers to the HTML element that received the event:
// <button onclick="this.style.display='none'">
//   Click to Remove Me!
// </button>


console.log("## Property Getters and Setters ##");

var person2 = {
  firstName: "John",
  lastName : "Doe",
  language : "NO",
  // get lang() {
  //   return this.language;
  // },
  set lang(value) {
    // Set an object property using a setter:
    this.language = value.toUpperCase();
  }
};

// Set an object property using a setter:
person2.lang = "en";
console.log(person2.lang);
console.log(person2.lastName);

// The JavaScript prototype property also allows you to add new methods to objects constructors:
console.log("## prototype ##");

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.nationality = "English";

// Person.prototype.name = function() {
//   return this.firstName + " " + this.lastName;
// };

// var myFather = new Person("John", "Doe", 50, "blue");