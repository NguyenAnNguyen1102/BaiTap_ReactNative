"use strict";
//7. Use Promise.race() to return whichever Promise resolves first.
function testRace(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${name} finished first!`);
        }, time);
    });
}
const test1 = testRace("1", 3000);
const test2 = testRace("2", 4000);
const test3 = testRace("3", 2000);
Promise.race([test1, test2, test3])
    .then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
