console.log("## Regular Expressions ##");
// regular expression is a sequence of characters that forms a search pattern.
// regular expressions are often used with the two string methods: search() and replace()

var str = "Visit W3Schools";
var result = str.search(/w3schools/i); //search "w3schools" text /i means without case sensative returns position
console.log(result);

var str = "Visit Microsoft";
var result = str.replace(/microsoft/i, "W3Schools");
console.log(result);
console.log();

// method searches a string for a match against a regular expression, and returns the matches, as an Array object
console.log("## match ##");
var str = "The rain in SPAIN stays mainly in the plain";
var result = str.match(/ain/g);
console.log(result);
console.log();

// Regular Expression Modifiers
// i perform case-insensitive matching	
// g perform a global match (find all matches rather than stopping after the first match)	
// m perform multiline matching
// [abc] find any of the characters between the brackets	
// [0-9] find any of the digits between the brackets	
// (x|y) find any of the alternatives separated with |

var str = "1234567893";
var pattern = /[1-3]/g;
var result = str.match(pattern);
console.log(result);
console.log();

var str = "re, green, red, green, gren, gr, blue, yellow";
var pattern = /(red|green)/g;
var result = str.match(pattern);
console.log(result);
console.log();

// \d	find a digit	
// \s	find a whitespace character	
// \b	find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
// n+	matches any string that contains at least one n
// n*	matches any string that contains zero or more occurrences of n
// n?	matches any string that contains zero or one occurrences of n

// global search for at least one "o" in a string
var str = "Hellooo World! Hello W3Schools!"; 
var pattern = /o+/g;
var result = str.match(pattern);
console.log(result);
console.log();

// global search for an "l", followed by zero or more "o" characters.
var pattern = /lo*/g;
var result = str.match(pattern);
console.log(result);
console.log();

// global search for a "1", followed by zero or one "0" characters
var str = "1, 100 or 1000?";
var pattern = /10?/g;
var result = str.match(pattern);
console.log(result);
console.log();

//searches a string for a pattern, and returns true or false, depending on the result.
console.log("## test ##");

// searches a string for the character "e"
var pattern = /e/;
console.log(pattern.test("The best things in life are free!"));
console.log();

// searches a string for a specified pattern, and returns the found text as an object
// no match is found, it returns an empty (null) object
console.log("## exec ##");

//searches a string for the character "e"
console.log(/e/.exec("The best things in life are free!"));
console.log();

var str1 = "sinema";
var str2 = "sInema";
var pattern = /\b[s,S][i,I]nema/;
console.log(pattern.test(str1));
console.log(pattern.test(str2));
console.log();






