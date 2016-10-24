var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    console.log(response.headers)
    // response.on('data', console.log)
    response.on('error', (error) => console.error(`http error: ${error.toString()}`))
}).on('error', (err) => console.error(`system error: ${err.toString()}`))
.on('response', (fs) => console.log('prout'))