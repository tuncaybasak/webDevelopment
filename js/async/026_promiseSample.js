// // Sample 1
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if(a == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("This is in the then " + message);
// }).catch((message) => {
//   console.log("This is in the catch " + message);
// });

// sample 2
const userLeft = true;
const userWatchingCatMem = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
  if(userLeft) {
    reject({
      name: "User Left",
      message: ":("
    });
  } else if(userWatchingCatMem){
    reject({
      name: "User watching cat mem",
      message: "web < catch"
    });
    }else {
      resolve('thumbs up and subscribe');
    }
  })
}

watchTutorialPromise().then((message) => {
  console.log('Success: ' + message);
}).then((message) => {
  console.log('Success: ' + message);
}).catch((error) => {
  console.log(error.name + ' ' + error.message);
});

// sample 3
const recordVideoOne = new Promise((resolve, reject) => {  
  resolve('Video 1 recoreded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 recoreded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 recoreded');
});

//promise all works all metods after finished all methods, works then, or catch method
Promise.all([
recordVideoOne,
recordVideoTwo,
recordVideoThree,
]).then((message) => {
  console.log(message);
})

//return first message finished.
Promise.race([
recordVideoOne,
recordVideoTwo,
recordVideoThree,
]).then((message) => {
  console.log(message);
})