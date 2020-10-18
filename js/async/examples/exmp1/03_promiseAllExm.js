const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hello'); 
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'World'); 
});

const p3 = 1000;

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);  
}).catch((err) => {
  console.error('Promise.all rejection!', err)
})