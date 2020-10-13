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