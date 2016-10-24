var bl = require('bl')

var http = require('http')
var list = []
var count = 0

function print() {
  for (var i = 0; i < 3; i++) {
    console.log(list[i])
  }
}
http.get(process.argv[2], res => {

    res.pipe(bl((err,data) => {
         if (err) {
           return console.error(err)
         }
         list[0] = data.toString()
         count++
         if (count === 3 ) print()         
    }))
})
http.get(process.argv[3], res => {

    res.pipe(bl((err,data) => {
         if (err) {
           return console.error(err)
         }
         list[1] = data.toString()
         count++
         if (count === 3 )   print()    
    }))
})

http.get(process.argv[4], res => {

    res.pipe(bl((err,data) => {
         if (err) {
           return console.error(err)
         }
         list[2] = data.toString()
         count++
         if (count === 3 ) print()   
    }))
})


