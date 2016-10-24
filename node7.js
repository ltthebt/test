var bl = require('bl')

var http = require('http')
http.get(process.argv[2], res => {

    res.pipe(bl((err,data) => {
         if (err) {
           return console.error(err)
         }
         data = data.toString()
         console.log(data.length)
         console.log(data)       
    }))
})
