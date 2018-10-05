let bl = require('bl');
let http = require('http');

function thisFunc(url) {
    return new Promise(resolve => {
        http.get(url, response => {
            response.pipe(bl(function (err, data) {
                if (err) {
                    return console.error(err)
                }
                resolve(data.toString());
            }))
        });
    });
}

async function asyncCall() {
    for (let i = 2; i < 5; i++) {
        let url = process.argv[i];
        const result = await thisFunc(url);
        console.log(result);
    }
}

asyncCall();
