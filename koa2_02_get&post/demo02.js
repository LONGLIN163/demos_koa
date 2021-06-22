const Koa = require("koa")
const app=new Koa()
app.use(async(ctx) => {
    let url=ctx.url;
    // use request to receive get request
    let request=ctx.request;
    let req_query=request.query; //obj
    let req_querystring=request.querystring;//string

    // use ctx receive get request directly
    let ctx_query=ctx.query;//obj
    let ctx_querystring=ctx.querystring;//string
    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3000,()=>{
    console.log("haha")
})

//http://127.0.0.1:3000/?user=haha&age=20

//out put
/*
{
    url: "/?user=haha&age=20",
    req_query: {
    user: "haha",
    age: "20"
    },
    req_querystring: "user=haha&age=20"
}
*/