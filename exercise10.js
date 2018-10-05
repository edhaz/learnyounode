let net = require('net');
let date = new Date();
let strftime = require('strftime');
let portNumber = process.argv[2];

let server = net.createServer(function (socket) {
    let data = `${strftime('%F %T')}\n`;
    socket.write(data);
    socket.end();
});
server.listen(portNumber);

