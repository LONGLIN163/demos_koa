
//****************************************** */
/** 
async function testAsync(){ // asyn can covert a common metod to a asynchronous method
    return "Hello async"
}
const result=testAsync();
console.log(result) //Promise { 'Hello async' }
*/

//****************************************** */

/*
function getSth(){
    return "something"
}

async function testAsync(){ 
    return "Hello async"
}

// await has to be inside aysnc, otherwise it can cause the program get blocked.
async function test(){
    const v1=await getSth(); // ****await can receive a common value
    const v2=await testAsync(); //****also can receive receive Promise obj
    console.log(v1,v2)// something Hello async
}

test()
*/

//****************************************** */

//simulate a asyc function
function takeLongTime() {   
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("long_time_value")
        }, 4000);
    })
}

async function test(){
    const v=await takeLongTime(); 
    console.log(v)
}

test()