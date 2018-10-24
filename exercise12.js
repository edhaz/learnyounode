let http = require('http');
let map = require('through2-map');
let portNumber = process.argv[2];

let server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('Send me a POST\n');
    }

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res);
}).listen(portNumber);
