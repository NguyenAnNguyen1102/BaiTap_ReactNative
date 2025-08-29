"use strict";
//1. Create a Promise that returns the string "Hello Async" after 2 seconds.
function promiseTest1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
promiseTest1().
    then((result) => console.log(result));
