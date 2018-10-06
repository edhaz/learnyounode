let net = require('net');
let date = new Date();
let strftime = require('strftime');
let portNumber = process.argv[2];

let server = net.createServer(function (socket) {
    let data = `${strftime('%F %H:%M')}\n`;
    socket.write(data);
    socket.end();
});
server.listen(portNumber);


/* OFFICIAL
var net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))

 */
