console.log("## json ##");
console.log();

// common use of JSON is to receive data from a web server.
console.log("## JSON.parse() ##");
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log();

// common use of JSON is to send data to a web server.
console.log("## JSON.stringify() ##");
var obj = {name:"John", age:30, city:"New York"};
var myJSON = JSON.stringify(obj);
console.log(myJSON);
console.log();