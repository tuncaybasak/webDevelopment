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

// ## Constructor ##
function Person(FirstName, LastName, Age) {
        this.firstName = FirstName || "unknown";
        this.lastName = LastName || "unknown";
        this.age = Age || 25;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
};

var person1 = new Person("James","Bond",50);
alert(person1.getFullName());

var person2 = new Person("Tom","Paul");
alert(person2.getFullName());


// ## Properties with Getters and Setters ##
// Object.defineProperty() method can be used to define a property with getter & setter.

function Person() {
    var _firstName = "unknown";

    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return _firstName;
            },
            set: function (value) {
                _firstName = value;
            }
        }
    });
};

var person1 = new Person();
person1.FirstName = "Steve";
alert(person1.FirstName );
            
var person2 = new Person();
person2.FirstName = "Bill";
alert(person2.FirstName);

// ## Read-only Property ##
// Do not specify set function in order to create read-only property as shown below.
function Person(firstName) {

    var _firstName = firstName || "unknown";

        Object.defineProperties(this, {
            "FirstName": {
                get: function () {
                    return _firstName;
                }
            }
        });
    };
var person1 = new Person("Steve");
//person1.FirstName = "Steve"; -- will not work
alert(person1.FirstName );
            
var person2 = new Person("Bill");
//person2.FirstName = "Bill"; -- will not work
alert(person2.FirstName );


// ## Multiple Properties ##
// Specify more than one property in defineProperties() method as shown below.

function Person(firstName, lastName, age) {
    var _firstName = firstName || "unknown";
    var _lastName = lastName || "unknown";
    var _age = age || 25;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () { return _firstName },
            set: function (value) { _firstName = value }
        },
        "LastName": {
            get: function () { return _lastName },
            set: function (value) { _lastName = value }
        },
        "Age": {
            get: function () { return _age },
            set: function (value) { _age = value }
        }
    });

    this.getFullName = function () {
            return this.FirstName + " " + this.LastName;
    }
};

var person1 = new Person();
person1.FirstName = "John";
person1.LastName = "Bond";
    
alert(person1.getFullName());
