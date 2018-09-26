let fs = require('fs');
let lines = undefined;


function logLines(content) {
    lines = content.toString().split('\n').length - 1;
    console.log(lines)
}

fs.readFile(process.argv[2], (err, fileContents) => {
    logLines(fileContents)
});






// Official solution //

// var fs = require('fs')
// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//     if (err) {
//         return console.log(err)
//     }
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
// })

