function greeting(name) {
    console.log('Hello ' + name);
}

const farewell = function (name) {
    console.log('Bye ' + name);
}

  
function processUserInput(callback) {
    const name = 'Joe';
    callback(name);
}

processUserInput(greeting);
processUserInput(farewell);
processUserInput((name) => { console.log("Wow! " + name);});