console.log("## new date ##");
// creates a new date object with the current date and time
console.log(new Date());
console.log();

//creating Date Objects
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

console.log(new Date(2018,11)); 
console.log(new Date(2018,0,24));
console.log(new Date(2018, 11, 24, 10, 33, 30));
console.log();

//Displaying Dates
console.log("## Displaying Dates ##");
var d = new Date();
console.log(d.toString());
console.log(d.toUTCString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log();

console.log("## JavaScript Date Input ##");
//There are generally 3 types of JavaScript date input formats:
//ISO Date"2015-03-25" (The International Standard)
//Short Date "03/25/2015"
//Long Date	"Mar 25 2015" or "25 Mar 2015"

//ISO Dates (Date-Time)
var d = new Date("2015-03-25");
console.log(d);
var d = new Date("2015-03");
console.log(d);
var d = new Date("2015");
console.log(d);
console.log();

//convert it to milliseconds
console.log("## parse ##");
var msec = Date.parse("March 21, 2012");
console.log(msec);
var d = new Date(msec);
console.log(d);
console.log();

console.log("## JavaScript Get Date Methods ##");
var d = new Date();
console.log(d.getFullYear());	//Get the year as a four digit number (yyyy)
console.log(d.getMonth()); // Get the month as a number (0-11)
console.log(d.getDate());	// Get the day as a number (1-31)
console.log(d.getHours());	// Get the hour (0-23)
console.log(d.getMinutes());	// Get the minute (0-59)
console.log(d.getSeconds());	// Get the second (0-59)
console.log(d.getMilliseconds());	// Get the millisecond (0-999)
console.log(d.getTime());	// Get the time (milliseconds since January 1, 1970)
console.log(d.getDay());	// Get the weekday as a number (0-6)
console.log();

console.log("## JavaScript Set Date Methods ##");
// setDate() Set the day as a number (1-31)
// setFullYear() Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

var d = new Date();
d.setFullYear(2020);
console.log(d);
d.setFullYear(2020, 11, 3);
console.log(d);

//JavaScript dates sucks look momentjs