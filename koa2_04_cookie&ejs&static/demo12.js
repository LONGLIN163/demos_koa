const Koa = require("koa")
const path=require("path")
const static=require("koa-static")

const app=new Koa()

const staticPath ='./static'

app.use(static(path.join(__dirname,staticPath)))

app.use(async (ctx) => {
    ctx.body="haha"
})

app.listen(3000,()=>{ 
    console.log("demo12,static...")
})

// go to http://127.0.0.1:3000/koa2.jpg