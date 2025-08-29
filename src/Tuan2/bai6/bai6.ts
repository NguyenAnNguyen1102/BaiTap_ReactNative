//6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.

function simulateTask1(taskName:string, time:number):Promise<string>{
   
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(taskName)
    },time)
   })
}

const task1 = simulateTask1("Task 1", 4000);
const task2 = simulateTask1("Task 2", 2000);
const task3 = simulateTask1("Task 3", 3000);


Promise.all([task1,task2,task3])
.then((value)=>{
    console.log(value)
})