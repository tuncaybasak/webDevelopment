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