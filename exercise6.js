let filterFn = require('./module.js');
let folder = process.argv[2];
let ext = process.argv[3];

filterFn(folder, ext, function (err, list) {
    if (err) return console.error("There was an error:", err);

    list.forEach(file => console.log(file));
});

// TEST
