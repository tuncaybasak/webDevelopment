// ## JavaScript Async ##

// Async makes a JavaScript function return a promise
// Await makes a JavaScript function wait for a promise

async function f() {
  return "Hello";
}

// Is the same as:

async function f() {
  return Promise.resolve("Hello");
}

async function getFile() {
  let promise = new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {resolve(req.response);}
      else {resolve("File not Found");}
    };
    req.send();
   });
   let result = await promise;
   document.getElementById("demo").innerHTML = result;
}

getFile();