let fs = require('fs');
let path = require('path');

module.exports = function (folder, ext, callback) {
    fs.readdir(folder, (err, data) => {
        if (err) return callback(err);

        data = data.filter(file => path.extname(file) === '.' + ext);

        callback(null, data);
    });
};

