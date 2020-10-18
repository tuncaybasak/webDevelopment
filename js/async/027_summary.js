// Callback vs Promises vs Async Await

//Callbacks
// In JavaScript, functions are objects. So we can pass objects to functions as parameters.
function printString(){
   console.log("Tom"); 
   setTimeout(function() { console.log("Jacob"); }, 300); 
   //  setTimeout(() =>  { console.log("Jacob"); }, 300);
  console.log("Mark")
}

printString();

// Promises
// First of all, a Promise is an object. There are 3 states of the Promise object:

// Pending: Initial State, before the Promise succeeds or fails.
// Resolved: Completed Promise
// Rejected: Failed Promise, throw an error

// Creating a Promise:
const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});

//Using Promise:
myFirstPromise
.then((successMsg) => {
    console.log(successMsg);
})
.catch((errorMsg) => { 
    console.log(errorMsg);
});

// What is Chaining?
// Sometimes we need to call multiple asynchronous requests, then after the first Promise is resolved (or rejected), a new process will start to which we can attach it directly by a method called chaining.

const helloPromise  = function() {
  return new Promise(function(resolve, reject) {
    const message = `Hi, How are you!`;
    resolve(message)
  });
}

const demoPromise= function() {
  myFirstPromise
  .then(helloPromise)
  .then((successMsg) => {
      console.log("Success:" + successMsg);
  })
  .catch((errorMsg) => { 
      console.log("Error:" + errorMsg);
  })
}

demoPromise();

// Async/Await:
// Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.

async function printMyAsync(){
  await printString("one");
  await printString("two");
  await printString("three");
}

async function demoPromise() {
  try {
    let message = await myFirstPromise;
    let message  = await helloPromise();
    console.log(message);

  }catch((error) => { 
      console.log("Error:" + error.message);
  })
}

// finally, call our async function

(async () => { 
  await myDate();
})();

// https://javascript.info/async