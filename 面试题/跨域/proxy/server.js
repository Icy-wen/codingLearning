const { log } = require('console')
const http = require('http')
const server=http.createServer((req,res)=>{   
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
    })

    //向后端发送请求
    http.request({
        hostname:'192.168.1.75',
        port:'3000',
        path:'/',
        method:'GET',
        headers:{}
    },(proxyRes)=>{
        proxyRes.on('data',(data)=>{
            res.end(data.toString())       
        })
    }).end()
})
server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
})
