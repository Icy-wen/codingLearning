import express from 'express'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
const app = express()
const port = 3000
dotenv.config({
    path:['.env.local','.env']
})

async function authKlingai(){
    const headers={
        algorithm:'HS256',
    }
    const now = Math.floor(Date.now() / 1000);
    const payload={
        iss:process.env.Access_Key,
        exp:now+1800,
        nbf:now-5,
    }
    //用kling的密钥生成一个令牌
    const token = jwt.sign(payload,process.env.Secret_Key,headers)
    return token;

}
app.get('/jwt-auth',async(req,res)=>{
    const token =await authKlingai()
    res.send(token)
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
