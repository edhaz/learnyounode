let fs = require('fs');
let lines = undefined;

function amount(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        lines = fileContents.toString().split('\n').length - 1;
        callback()
    })
}

function logLines() {
    console.log(lines)
}

amount(logLines);

// Official solution //

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
        return console.log(err)
    }
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
})
