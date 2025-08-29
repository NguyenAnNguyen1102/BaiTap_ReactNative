//11. Convert Exercise 1 into async/await.
function promiseTest11():Promise<string>{
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Hello Async");
            }, 2000);
        })
    }

async function test11(){
    const data =  await promiseTest11();
    console.log(data)
}


test11()