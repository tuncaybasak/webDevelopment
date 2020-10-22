// Define Class in JavaScript
// JavaScript ECMAScript 5, does not have class type. 
// you can create a function in such a way so that it will act as a class

// Method in Class
function Person() {
            this.firstName = "unknown";
            this.lastName = "unknown";
            this.getFullName = function(){
                return this.firstName + " " + this.lastName;
            }
        };

var person1 = new Person();
person1.firstName = "Steve";
person1.lastName = "Jobs";

alert(person1.getFullName());
     
var person2 = new Person();
person2.firstName = "Bill";
person2.lastName = "Gates";

alert(person2.getFullName());
