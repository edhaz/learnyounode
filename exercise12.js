let http = require('http');
let fs = require('fs');
let portNumber = process.argv[2];

let server = http.createServer(function (req, res) {
    let filename = process.argv[3];
    let readStream = fs.createReadStream(filename);
    readStream.on('open', function () {
        readStream.pipe(res);
    });

    readStream.on('error', function(err) {
        res.end(err);
    })
}).listen(portNumber);
