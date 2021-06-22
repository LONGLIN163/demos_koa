const Koa=require("koa")
const app=new Koa()
const bodyParser= require("koa-bodyparser")

app.use(bodyParser()); 

app.use(async (ctx) => {
    if(ctx.url==="/" && ctx.method==="GET"){
        // Show form page
        let html=`
          <h1>GET</h1>
          <form method="POST" action="/">
             <p>userName</p>
             <input name="userName" /> 
             <br />
             <p>age</p>
             <input name="age" />
             <br />
             <p>website</p>
             <input name="website" />
             <br />
             <button type="submit">submit</button>
          </form>
        `
        ctx.body=html;
    }else if(ctx.url==="/" && ctx.method==="POST"){
        let postdata = ctx.request.body; // once we use bodyParser, it will include data to "ctx.request.body"
        ctx.body=postdata;
    }else{
        ctx.body='<h1>404</h1>';
    }
})


app.listen(3000,() => {
    console.log("demo03")
})