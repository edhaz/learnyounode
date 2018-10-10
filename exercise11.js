let http = require('http');
let fs = require('fs');
let portNumber = process.argv[2];

let server = http.createServer(function (req, res) {
    dat = fs.createReadStream(req);
    console.log(dat);
});
server.listen(portNumber);

// fs.createReadStream()
