// classes were introduced in ES6.
// classes are templates for JavaScript Objects.
console.log("## classes ##");

// Syntax
// class ClassName {
//   constructor() { ... }
//   method_1() { ... }
//   method_2() { ... }
//   method_3() { ... }
//   }
// }

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age(year) + " years old.");
console.log();


console.log("## Class Inheritance ##");
//To create a class inheritance, use the extends keyword.

class MyCar {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class MyModel extends MyCar {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new MyModel("Ford", "Mustang");
console.log(mycar.show());
console.log();


console.log("## Getters and Setters ##");
class Car1 {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

mycar = new Car1("Ford");
console.log(mycar.cnam);
mycar.cnam = "Volvo";
console.log(mycar.cnam);
console.log();

console.log("## Static class methods ##");
class Car2 {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

myCar = new Car2("Ford");

// You can call 'hello()' on the Car Class:
console.log(Car.hello());

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.