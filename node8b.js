var bl = require('bl')

var http = require('http')
var list = []
var count = 0

function print() {
  for (var i = 0; i < 3; i++) {
    console.log(list[i])
  }
}
function httpGet (index) {
    http.get(process.argv[2 + index], res => {

        res.pipe(bl((err,data) => {
            if (err) {
            return console.error(err)
            }
            list[index] = data.toString()
            count++
            if (count === 3 ) print()         
        }))
    })
}
for (var i = 0; i < 3; i++) {
    httpGet(i)
}
