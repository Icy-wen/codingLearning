const { log } = require('console')
const http = require('http')
const server=http.createServer((req,res)=>{
    const query=new URL(req.url,`http://${req.headers.host}`).searchParams
    if(query.get('cb')){
        const cb=query.get('cb')
        const data='hello jsonp'
        const result=`${cb}("${data}")`
        res.end(result)
    }

})
server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
})


