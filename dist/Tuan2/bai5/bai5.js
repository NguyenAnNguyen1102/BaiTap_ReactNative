"use strict";
//5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
function simulateTask(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
simulateTask(3000).then((value) => {
    console.log(value);
});
