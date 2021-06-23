const Koa = require("koa")
const views =require("koa-views")
const path=require("path")
const app=new Koa()

app.use(views(path.join(__dirname,"./view"),{
    extension:"ejs"
}))// __dirname indicates current root path

app.use(async (ctx) => {
    console.log(ctx)
    let title="Hello Koa!!!"
    await ctx.render("index",{title})// where the render() come from?---ejs
})


app.listen(3000,()=>{
    console.log("demo11,ejs...")
})

// go to console>application>cookies