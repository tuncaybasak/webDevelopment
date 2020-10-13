// Arrow functions were introduced in ES6.
console.log("## arrow functions ##");

// Named function multiple parameters
function sum(a,b) {
  return a + b;  
}

let sum2 = (a,b) => a + b;

console.log(sum(2,3));
console.log(sum2(2,3));
console.log("####");

//Named function one parameter
function isPositive(number){
  return number >= 0;
}

let isPositive2 = number => number >= 0;

console.log(isPositive(1));
console.log(isPositive2(-1));
console.log("####");

//Named function no parameters
function randomNumber() {
  return Math.random();
}

let randomNumber2 = () =>  Math.random();

console.log(randomNumber());
console.log(randomNumber2());
console.log("####");

//anonymous function
document.addEventListener('click', function () {
  console.log('click');
});

document.addEventListener('click', () => console.log('click') );

console.log("## arrow functions this usage ##");
class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log('Arrow: ' + this.name);
    },100);
  }

  printNameFunction(){
    setTimeout(function() {
      console.log('Function: ' + this.name);
    },100);
  }
}

// this keyword behaves differently inside arrow function and normal function
// normal function defined globbaly, redefines this keyword so you cannot use it!

let person = new Person('Bob');
person.printNameArrow(); //Arrow: Bob
person.printNameFunction(); //Function: 