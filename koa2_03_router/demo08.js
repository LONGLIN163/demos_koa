
//****hwo to design multi-layers-routers */

const Koa=require("koa")
const Router=require("koa-router")

const app=new Koa()

// 1. define two sub routers
let home=new Router()
home
    .get("/haha",async (ctx) => {
        ctx.body="home-haha"
    })
    .get("/todo",async (ctx) => {
        ctx.body="home-todo"
    })
let page=new Router()
page
    .get("/haha",async (ctx) => {
        ctx.body="page-haha"
    })
    .get("/todo",async (ctx) => {
        ctx.body="page-todo"
    })

// 2. define main router
const router=new Router()

//  3. mount sub routers to main router 
router.use("/home",home.routes(),home.allowedMethods())
router.use("/page",page.routes(),page.allowedMethods())


// 4. mount middleware to main
app
 .use(router.routes())
 .use(router.allowedMethods())// use allow...can prevent post request.post error here

app.listen(3000,() => {
    console.log("demo8hahaha");}
)

//http://127.0.0.1:3000/page/haha