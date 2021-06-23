const Koa = require("koa")
const app=new Koa()
app.use(async(ctx) => {
    if(ctx.url==='/index'){
       // set values three params
       ctx.cookies.set(
           "myname","xixi",{
             domain:"127.0.0.1",
             //path:"/index",
             maxAge:1000*60*60*24,
             expires:new Date("2021-06-23"),
             httpOnly:false, 
             overwrite:false // be carefull about security
           }
       )
       ctx.body="cookie set done"
    }else{
        if(ctx.cookies.get("myname")){
            ctx.body=ctx.cookies.get("myname");
        }
        ctx.body="no cookie"
    }

})

app.listen(3000,()=>{
    console.log("demo10,cookies...")
})

// go to console>application>cookies