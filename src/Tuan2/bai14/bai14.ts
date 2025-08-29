
//14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
function mutipleWith3(number: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 3);
        }, 1000);
    });
}


async function promiseTest14(input:number) {
    console.log(`Input first: ${input}`);
    const result = await mutipleWith3(input);
    console.log(`Result after 1 seconds: ${result}`);
}


promiseTest14(5);
