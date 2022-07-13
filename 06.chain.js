// This sample program cannot excute - Use for explaination only
// Callback Chain Example
firstRequest(function (response) {
    secondRequest(response, function (nexResponse) {
        thirdRequest(nexResponse, function (finalResponse) {
            console.log('Final Response: ' + finalResponse);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

// Promise Chain Example
firstRequest()
    .then(function(response) {
        return secondRequest(response);
    })
    .then(function(nextResponse) {
        return thirdRequest(nextResponse);
    })
    .then(function(finalResponse) {
        console.log('Final Response : ' + finalResponse);
    })
    .catch(failureCallback);