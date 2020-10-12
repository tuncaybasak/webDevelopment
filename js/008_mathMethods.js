//  returns the value of x rounded to its nearest integer
console.log("## round ##");
console.log(Math.round(4.7));
console.log(Math.round(4.4));
console.log();

//  returns the value of x rounded up to its nearest integer
console.log("## ceil ##");
console.log(Math.ceil(4.1));
console.log();

// returns the value of x rounded down to its nearest integer
console.log("## floor ##");
console.log(Math.floor(4.7));
console.log();

// returns the absolute (positive) value of x
console.log("## abs ##");
console.log(Math.abs(-4.1));
console.log();

// can be used to find the lowest or highest value in a list of arguments
console.log("## Math.min() and Math.max() ##");
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));

const array1 = [1, 3, 2];
console.log(Math.max(...array1));
console.log();

// returns a random number between 0 (inclusive), and 1 (exclusive):
console.log("## random ##");
console.log(Math.random());
console.log();

//returns a random integer from 0 to 9
console.log(Math.floor(Math.random() * 10));

// returns a random integer from 0 to 10
console.log(Math.floor(Math.random() * 11)); 

// returns a random integer from 0 to 99
console.log(Math.floor(Math.random() * 100));

// returns a random integer from 0 to 100
console.log(Math.floor(Math.random() * 101));

// returns a random integer from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// returns a random integer from 1 to 100
console.log(Math.floor(Math.random() * 100) + 1);