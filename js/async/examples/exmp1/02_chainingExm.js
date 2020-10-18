let fetchData = function(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('processing data complete');
        resolve({id: 1, message: 'Nice work'});
      }, 1000);
    });
};

let parseData = function(data) {
    // foo = bar;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let parsedOutput = 'Parsed the data for id '  + data.id + ' with message ' + data.message;
        resolve({parsed: parsedOutput});
      }, 1000);
    });
};

let echoData = function(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data.parsed);        
      }, 1000);
    });
};

//chaining the promises
fetchData().then(parseData).then(echoData).catch(err => {
  console.log(err)
});
