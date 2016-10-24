//this is wrong
var bl = require('bl')

var http = require('http')
var list = []
var count = 0

function print() {
  for (var i = 0; i <3; i++) {
    console.log(list[i])
  }
}
for (var i = 0; i < 3; i++) {
    http.get(process.argv[2 + i], res => {

        res.pipe(bl((err,data) => {
            if (err) {
            return console.error(err)
            }
            list[i] = data.toString()
            count++
            if (count === 3 ) print()         
        }))
    })
}

