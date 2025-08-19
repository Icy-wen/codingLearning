const http = require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,POST',
        'Access-Control-Allow-Headers':'content-type'

    })
    res.end('hello cors')
})
server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
})

