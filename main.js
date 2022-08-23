let http = require('http')

let Server = http.createServer()
Server.listen(3000)

Server.on('connection',()=>{
    console.log('new connection found...')
})

console.log('server listeing on port 3000...')