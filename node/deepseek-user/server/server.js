//创建一个服务
//定义一个接口/api/users
//读取db.json文件中的数据,返回前端
require('dotenv').config();//引入dotenv模块
const http = require('http');//引入http模块
const fs = require('fs');//引入fs模块
const OpenAI = require('openai');//引入openai模块
const openai = new OpenAI({
    baseURL:'https://api.deepseek.com',
     apiKey: process.env.DEEPSEEK_API_KEY, 
    });//创建一个openai实例，传入apiKey
const server = http.createServer(async(req, res) => {
    //处理跨域
    res.setHeader('Access-Control-Allow-Origin', '*');//允许跨域
    res.setHeader('Access-Control-Allow-Methods', '*');//允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', '*');//允许的请求头
   
    if (req.url.includes('/api/users')) {
        const url = new URL(req.url,`http://${req.headers.host}`)
        const query=url.searchParams.get('name');//获取查询参数name的值
        if(query == 'all'){
            const data = fs.readFileSync('./db.json', 'utf8');//读取db.json文件中的数据,返回前端
            const users = JSON.parse(data).users;//将数据转换为json格式
            res.end(JSON.stringify({
            success: true,
            data: users
        }));//返回前端
        }else{
            //让deepseek去找数据返回前端
            const data=fs.readFileSync('./db.json','utf8');//读取db.json文件中的数据,返回前端
            const users = await openai.chat.completions.create({
                messages: [
                  { role: "system", content: "你是一个很好的助手" },
                  {
                    role: "user",
                    content: `请分析${data}中的数据，找 
                    出一条数据的 name 属性值等于 ${query}，
                    将这条数据读取出来，存放在一个数组中，返回给我，严格按照下面的样式返回不需要任何其它东西，
                    形如：{
                      "data": [{
                            "id": 4,
                            "name": "刘洋",
                            "age": 30,
                            "address": "赣州"
                        }]
                    }`,
                  }
                ],
                model: "deepseek-chat",
              })
        console.log(users.choices[0].message.content);//打印返回的数据
        res.end(users.choices[0].message.content);//返回前端
    }

 }
})//创建一个服务

 server.listen(3000, () => {
     console.log('Server is running on port 3000');//监听端口3000，输出Server is running on port 3000
 })
