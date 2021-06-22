
//****hwo to design multi-layers-routers */

const Koa=require("koa")
const Router=require("koa-router")

const app=new Koa()

const router=new Router()

// here is how to sent arguments from url
router.get("/",(ctx,next) => {
    ctx.body=ctx.query; // http://127.0.0.1:3000/?name=haha&age=18
})

app
 .use(router.routes())
 .use(router.allowedMethods())

app.listen(3000,() => {
    console.log("demo09...");
 }
)

