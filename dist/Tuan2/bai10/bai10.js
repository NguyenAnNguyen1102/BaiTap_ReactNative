"use strict";
//10. Use .finally() to log "Done" when a Promise finishes (success or failure).
function bai10() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
}
bai10().then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Done");
});
