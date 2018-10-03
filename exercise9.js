let bl = require('bl');
let http = require('http');

for (let i = 2; i <= 4; i++){
    http.get(process.argv[i], response => {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            const dataString = data.toString();
            console.log(dataString);
        }))
    });
}
