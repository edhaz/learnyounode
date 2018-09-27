function bar (callback) {
    foo(function (err, data) {
        if (err)
            return callback(err) // early return

        // ... no error, continue doing cool things with `data`

        // all went well, call callback with `null` for the error argument

        callback(null, data)
    })

}
