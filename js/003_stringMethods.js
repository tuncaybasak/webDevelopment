
// can convert numbers to strings.
console.log("## String ##");
console.log(String(123));
console.log();

// (length) returns the length of a string
var txt = "Please locate where 'locate' occurs!";
console.log("## length ##");
console.log(txt);
console.log(txt.length);
console.log();

// (indexOf) method returns the index of (the position of) the first occurrence of a specified 
// text in a string return -1 if the text is not found.
console.log("## indexOf ##");
console.log(txt.indexOf("locate"));
console.log();

// (lastIndexOf) method returns the index of the last occurrence of a specified text in a string
console.log("## lastIndexOf ##");
console.log(txt.lastIndexOf("locate"));
console.log();

// slice(start, end) 
// extracts a part of a string and returns the extracted part in a new string.
console.log("## slice ##");
var res = txt.slice(14,19);
console.log(res);

//If you omit the second parameter, the method will slice out the rest of the string:
res = txt.slice(14);
console.log(res);
console.log();

console.log("## substring ##");
console.log("substring is similar to slice");
console.log("The difference is that substring cannot accept negative indexes.");
console.log();

console.log("## substr ##");
console.log("substr is similar to slicE");
console.log("The difference is that the second parameter specifies the length of the extracted par");
console.log();

// replaces a specified value with another value in a string
// does not change the string it is called on. It returns a new string
// By default, the replace() method replaces only the first match
console.log("## replace ##");
var txt1 = txt.replace("Please", "Dear");
console.log(txt);
console.log(txt1);
console.log();

console.log("## toUpperCase ##");
console.log(txt1.toUpperCase());
console.log();

console.log("## toLowerCase ##");
console.log(txt1.toLowerCase());
console.log();

// joins two or more strings
console.log("## concat ##");
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);
console.log();

console.log("## trim ##");
var str = "       Hello World!        ";
console.log(str);
console.log(str.trim());
console.log();

//returns the character at a specified index (position) in a string
console.log("## charAt ##");
var str1 = "HELLO WORLD";
console.log(str1.charAt(3));

console.log("Property Access");
console.log(str1[3]);
console.log();

console.log("## split ##");
console.log("Converting a String to an Array");
var txt = "a,b,c,d,e";  
var arr = txt.split(",");
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log();

console.log("If the separator is \"\", the returned array will be an array of single characters:");
var txt = "abcde";  
var arr = txt.split("");
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}