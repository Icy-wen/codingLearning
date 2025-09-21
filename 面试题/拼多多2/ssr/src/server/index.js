import express from 'express'
import Home from '../page/Home.jsx'
import {renderToString} from 'react-dom/server'
import React from 'react'
const app=express()
const port=3000
const content = renderToString(React.createElement(<Home/>))

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${content}
    </body>
    </html>`)
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
