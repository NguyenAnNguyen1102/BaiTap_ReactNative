"use strict";
//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function bai3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
bai3().then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});
