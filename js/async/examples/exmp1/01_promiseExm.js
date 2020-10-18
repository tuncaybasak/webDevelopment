let allGood = false;

//define a Promise
// a promise can be in one of three state
// pending: hasn't settled to a valeu yet
// fulfilled: settled successfully (call resolve)
// rejected: settled unsuccessfully (call reject)
let fetchSomeData = new Promise((resolve, reject) =>{
  if(!allGood){
    reject("error fetching data!");
  } else {
    resolve({
      id: 1,
      message: 'nice work'
    });
  }
});

//consume a promise
fetchSomeData.then(fetchedData => {
  console.log('then:', fetchedData);
}).catch(err => {
    console.error('catch: ', err);
})