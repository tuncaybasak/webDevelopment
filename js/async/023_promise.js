// ## JavaScript Promises ##

// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A promise is a JavaScript object that links producing code and consuming code

// let promise = new Promise(function(resolve, reject) {
// // The producing code (it may takes some time)
// resolve(); // when finished
// reject();  // when error
// });

let promise = new Promise(function(resolve, reject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.htm");
  req.onload = function() {
    if (req.status == 200) {
      resolve(req.response);
    }
    else {
      reject("File not Found");
    }
  };
  req.send();
});

promise.then(
  function(response) {myDisplayer(response);},
  function(error) {myDisplayer(error);}
)


