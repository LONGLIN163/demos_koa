const Koa=require("koa")
app=new Koa()
const fs=require("fs")

function render(page) {

    return new Promise((resolve,reject) => {
        //let pageUrl= "./pages/"+page;
        let pageUrl= `./pages/${page}`;
        fs.readFile(pageUrl,"binary",(err,data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
    
}

async function route(url) {
    let page="404.html"

    switch (url) {
        case "/":
            page="index.html"
            break
        case "/index":
            page="index.html"
            break
        case "/todo":
            page="todo.html"
            break
        case "/404":
            page="404.html"
        default:
            break;
    }

    let html=await render(page);
    return html;
}


app.use(async (ctx) => {
    let url=ctx.request.url;
    let html=await route(url)
    ctx.body=html;

})

app.listen(3000,() => {
    console.log("demo05")
})