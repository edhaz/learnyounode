let fs = require('fs');
let path = require('path');

let folder = process.argv[2];
let ext = "." + process.argv[3];

fs.readdir(folder, (err, list) => {
    if (err) return console.error(err);
    for (i in list) {
        if (path.extname(list[i]) === ext) {
            console.log(list[i]);
        }
    }
});

// Offical version //
// var fs = require('fs');
// var path = require('path');
//
// var folder = process.argv[2];
// var ext = "." + process.argv[3];
//
//
// fs.readdir(folder, function (err, list) {
//     if (err) return console.error(err)
//     list.forEach(function (file) {
//         if (path.extname(file) === ext) {
//             console.log(file)
//         }
//     })
// });
