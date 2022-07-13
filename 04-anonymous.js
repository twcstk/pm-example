const message = function () {
    console.log("This message is a variable function");
}

setTimeout(message, 3000);
setTimeout( function() {
    console.log("This message is a anonymous function");
}, 2000);
