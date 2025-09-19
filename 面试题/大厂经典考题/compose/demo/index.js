const Koa = require('koa')
const app = new Koa()

function main(ctx,next) {
  ctx.response.body = 'hello world'
  next()
}

function main2(ctx,next) {
  ctx.response.body = 'hello world2'
}


app.use(main2)
app.use(main)
app.listen(3001)
