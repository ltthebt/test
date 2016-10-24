var fs = require('fs')
var path = require('path')
// var filtered = []
module.exports = function (folder, ext, callback) {
    fs.readdir(folder, (err, files) => {
        if (err) return callback(err)
    //  files.forEach(file => {
    //      if (path.extname(file) === '.' + ext) filtered.push(file)        
    //  })
        files = files.filter(file => path.extname(file) === '.' + ext)
        // callback(null, filtered)
        callback(null, files)
    })
} 