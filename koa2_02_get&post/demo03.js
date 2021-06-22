const Koa=require("koa")
const app=new Koa()
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
        let postdata=await parsePostData(ctx);
        //ctx.body="receive post";
        ctx.body=postdata;
    }else{
        ctx.body='<h1>404</h1>';
    }
})

function parsePostData(ctx) {
    return new Promise((resolve,reject) => {
        // try catch is must
        try{
            let postdata=""
            ctx.req.addListener("data",(data) => { // where the fuckin this data come from????
            //console.log(data.toString())
                postdata+=data; // 
            })
            ctx.req.on("end",() => {
                let parseData=parseQueryStr(postdata)
                resolve(parseData)
            })

        }catch(err){
          reject(err)
        }
    })
}

// conver querystr to an obj
function parseQueryStr(queryStr) {
    let queryData={};
    let queryStrList=queryStr.split("&") //covert str to arr 
    console.log(queryStrList)
    console.log(queryStrList.entries) 
    for(let [index,queryStr] of queryStrList.entries()){  
       let itemList=queryStr.split("=") // covert arr to another arr of arrs
       console.log(itemList)
       queryData[itemList[0]]=decodeURIComponent(itemList[1]) // deassgin value for each in arr
    }
    return queryData;  
}


app.listen(3000,() => {
    console.log("demo03")
})