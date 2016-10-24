

var mymodule = require('./node5module.js')

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err === null) {
        data.forEach(file => {
            console.log(file)
        })
    } else console.error(err)
})