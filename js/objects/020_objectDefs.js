// In JavaScript, almost "everything" is an object except primitives.
// A JavaScript object is a collection of named values

console.log("## Creating a JavaScript Object ##");
// first way 
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);
console.log();

//second way
var person = new Object();
person.firstName = "Ashley";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "black";
console.log(person);
console.log();

console.log("## JavaScript Objects are Mutable ##");
// Objects are mutable: They are addressed by reference, not by value.
// If person is an object, the following statement will not create a copy of person:
var x = person;  // This will not create a copy of person.
x.age= 45;
console.log(person);
console.log();

console.log("## Adding New Properties ##");
person.nationality = "English";
console.log(person);
console.log();

console.log("## Adding a Method to an Object ##");
person.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person.name());
console.log();

// Any JavaScript object can be converted to an array using Object.values()
console.log("## Object.values() ##");
var person = {name:"John", age:30, city:"New York"};
var myArray = Object.values(person);
console.log(myArray);
console.log();

console.log("## JavaScript Function or Getter ##")

//function
var person = {
  firstName: "John",
  lastName : "Doe",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
console.log();

// Get
var person = {
  firstName: "John",
  lastName : "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName);
console.log();

// JavaScript can secure better data quality when using getters and setters.

// ES5 New Object Methods
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)
// Object.defineProperty(person, "language", {value : "NO"});
// Object.defineProperty(person, "language", {writable:false});
// Object.defineProperty(person, "language", {enumerable:false});

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)
// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)