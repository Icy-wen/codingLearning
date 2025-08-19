const webSocket=require('ws')

const ws=new webSocket.Server({
    port:3000
})
let count=0
ws.on('connection',(socket)=>{
    console.log('建立连接');
    socket.on('message',(data)=>{//接收前端发送的数据

        //console.log(data.toString());
        socket.send('欢迎访问')
        setInterval(()=>{
            count++
            socket.send(count)
        },2000)

    })
})

