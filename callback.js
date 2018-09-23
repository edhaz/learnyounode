let fs = require('fs');
let myNumber = undefined;

function addOne(callback) {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        myNumber = parseInt(fileContents);
        myNumber++;
        callback()
    })
}

function logMyNumber() {
    console.log(myNumber);
}

addOne(logMyNumber);


/* psuedocode
function addOne(thenRunThisFunction) {
    waitAMinuteAsync(function waitedAMinute() {
        thenRunThisFunction()
    })
}

addOne(function thisGetsRunAfterAddOneFinishes() {});
*/
