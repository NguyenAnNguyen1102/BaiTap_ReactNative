//4. Use .then() and .catch() to handle a Promise that returns a random number.

function getRandomNumber():Promise<number>{
    return new Promise((resolve,reject)=>{
        const a = Math.random();
        if(a>0){
            resolve(a);
        }else{
            reject("Error: number is less than 0");
        }
    })
}


getRandomNumber().then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})