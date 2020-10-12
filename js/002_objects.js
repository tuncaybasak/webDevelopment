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