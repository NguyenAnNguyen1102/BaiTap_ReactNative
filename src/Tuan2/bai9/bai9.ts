
//9. Write a Promise that reads an array after 1 second and filters even numbers.
    function filterEvenNumbers(array:number[]):Promise<number[]>{
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(array.filter((value) => value % 2 === 0));
            }, 1000);
        })
    }

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    filterEvenNumbers(array)
    .then((value)=>{
        console.log(value)
    })