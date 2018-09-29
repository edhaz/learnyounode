let http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', console.log);
}).on('error', console.error);
