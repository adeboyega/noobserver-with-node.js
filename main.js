let http = require('http')
const { url } = require('inspector')

let Server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'Text/plain'})
    res.end('Bayobadass'+req.url)
})
Server.listen(3000)

Server.on('connection',()=>{
    console.log('new connection found...')
})

console.log('server listeing on port 3000...')

