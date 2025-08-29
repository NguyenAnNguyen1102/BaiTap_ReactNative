
//8. Create a Promise chain: square the number 2, then double it, then add 5.
function binhPhuong(value:number):Promise<number> {
    return new Promise((resolve, reject) => {
            resolve(value * value);
    });
}

function nhanDoi(value:number):Promise<number> {
    return new Promise((resolve, reject) => {
            resolve(value * 2);
    });
}


function add5(value:number):Promise<number> {
    return new Promise((resolve, reject) => {
            resolve(value + 5);
    });
}

binhPhuong(2)
.then((value)=>{
    return nhanDoi(value)
})
.then((value)=>{
    return add5(value)
})
.then((value)=>{
    console.log(`Result: ${value}`)
})
