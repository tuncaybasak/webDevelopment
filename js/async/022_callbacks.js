// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// callback function is a function passed as an argument to another function.

// JavaScript Callback Functions

// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.
// You could use one function to do the calculation, and another function to display the result:

function myDisplayerV1(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculatorV1(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

var result = myCalculatorV1(5, 5);
myDisplayerV1(result);


// By using a callback function, you could let the calculator function call the display function after the calculation was finished.

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

myCalculator(5, 5, myDisplayer);

// Sample
const userLeft = false;
const userWatchingCatMem = false;

function watchTutorialCallBack(callback, errorCallBack) {
  if(userLeft) {
    errorCallBack({
      name: "User Left",
      message: ":("
    });
  } else if(userWatchingCatMem){
    errorCallBack({
      name: "User watching cat mem",
      message: "web < catch"
    });
  }else {
    callback('thumbs up and subscribe');
  }
}

watchTutorialCallBack((message) => {
  console.log('Success: ' + message);
}, (error) =>{
  console.log(error.name + ' ' + error.message);
});