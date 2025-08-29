
//15. Call multiple async functions sequentially using await.
function addWith2(number: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number + 2);
        }, 3000);
    });
}

function mutipleWith3_new(number: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 3);
        }, 3000);
    });
}   

function square(number: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * number);
        }, 3000);
    });
}


async function test15(input:number){
    const result1 = await addWith2(input);
    const result2 = await mutipleWith3_new(result1);
    const result3 = await square(result2);
    console.log(`Final result: ${result3}`);
}

test15(10);