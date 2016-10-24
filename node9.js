var net = require('net')
function zerofill(i) {
    return (i < 10 ? '0' : '') + i
}
var server = net.createServer(socket => {
    var date = new Date()
    socket.end(zerofill(date.getFullYear()) + 
        '-' + zerofill(date.getMonth() + 1) + 
        '-' + zerofill(date.getDate()) + 
        ' ' + zerofill(date.getHours()) + 
        ':' + zerofill(date.getMinutes()) + '\n')
})
server.listen(Number(process.argv[2]))