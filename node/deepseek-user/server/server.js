//创建一个服务
//定义一个接口/api/users
//读取db.json文件中的数据,返回前端
const http = require('http');//引入http模块
const fs = require('fs');//引入fs模块
const server = http.createServer((req, res) => {
    //处理跨域
    res.setHeader('Access-Control-Allow-Origin', '*');//允许跨域
    res.setHeader('Access-Control-Allow-Methods', '*');//允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', '*');//允许的请求头
   
    if (req.url === '/api/users') {
        const data = fs.readFileSync('./db.json', 'utf8');//读取db.json文件中的数据,返回前端
        const users = JSON.parse(data).users;//将数据转换为json格式
        res.end(JSON.stringify({
            success: true,
            data: users
        }));//返回前端
    }

 })//创建一个服务

 server.listen(3000, () => {
     console.log('Server is running on port 3000');//监听端口3000，输出Server is running on port 3000
 })
