//5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.

function simulateTask(time:number):Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Task done");      
        }, time);
    })
}       

simulateTask(3000).then((value)=>{
    console.log(value)
})