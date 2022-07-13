const myPromise = new Promise((resolve,reject) => {
    let connection = true;
    if (connection) {
        resolve('Connction established');
    } else {
        reject('Connection refused');
    }
});

myPromise.then((message) => {
    console.log("Resolved: " + message);
}).catch((error) => {
    console.log("Rejected: " + error);
});

