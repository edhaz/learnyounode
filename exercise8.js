let bl = require('bl');
let http = require('http');

http.get(process.argv[2], response => {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        const dataString = data.toString();
        console.log(dataString.length);
        console.log(dataString);
    }))
});
