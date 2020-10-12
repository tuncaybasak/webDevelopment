console.log("## NaN - Not a Number ##");
console.log("NaN indicating that a number is not a legal number.");

var x = 100;
console.log(isNaN(x));
var y = NaN;
console.log(x+y);
console.log();

// returns a number as a string.
console.log("## toString ##");
console.log(x.toString());
console.log();

// returns returns a string, with the number written with a specified number of decimals
console.log("## toFixed ##");
var x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));
console.log();

// returns a string, with a number written with a specified length
console.log("## toPrecision ##");
var x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));
console.log();

// Converting Variables to Numbers
// Number() 
// parseInt() 
// parseFloat()

//  can be used to convert JavaScript variables to numbers:
console.log("## Number ##");
console.log(Number(true));          // returns 1
console.log(Number(false));         // returns 0
console.log(Number("10"));          // returns 10
console.log(Number("  10"));        // returns 10
console.log(Number("10  "));        // returns 10
console.log(Number(" 10  "));       // returns 10
console.log(Number("10.33"));       // returns 10.33
console.log(Number("10,33"));       // returns NaN
console.log(Number("10 33"));       // returns NaN
console.log(Number("John"));        // returns NaN
console.log(Number(new Date("2017-09-30")));    // returns the number of milliseconds since 1.1.1970
console.log();

//parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
console.log("## parseInt ##");
console.log(parseInt("10"));         // returns 10
console.log(parseInt("10.33"));      // returns 10
console.log(parseInt("10 20 30"));   // returns 10
console.log(parseInt("10 years"));   // returns 10
console.log(parseInt("years 10"));   // returns NaN 
console.log();

//parses a string and returns a number. Spaces are allowed. Only the first number is returned:
console.log("## parseFloat ##");
console.log(parseInt("10"));         // returns 10
console.log(parseInt("10.33"));      // returns 10.33
console.log(parseInt("10 20 30"));   // returns 10
console.log(parseInt("10 years"));   // returns 10
console.log(parseInt("years 10"));   // returns NaN 
console.log();

// MAX_VALUE returns the largest possible number
console.log(Number.MAX_VALUE);

// MIN_VALUE returns the lowest possible number
console.log(Number.MIN_VALUE);