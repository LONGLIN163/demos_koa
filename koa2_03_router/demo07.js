const Koa=require("koa")
const Router=require("koa-router")

const app=new Koa()
const router=new Router({
    prefix:'/long' // the samplest way of adding one more layer router http://127.0.0.1:3000/long/todo
})

router
    .get("/",(ctx,next) => {
        ctx.body="hello"
    })
    .get("/todo",(ctx,next) => {
        ctx.body="todo"
    })

//app.use(router.routes())// at this step , we already can see hello
app.use(router.routes()).use(router.allowedMethods())// use allow...can prevent post request.post error here

app.listen(3000,() => {
    console.log("demo7hahaha");}
)