"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
function mutipleWith3(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 3);
        }, 1000);
    });
}
function promiseTest14(input) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Input first: ${input}`);
        const result = yield mutipleWith3(input);
        console.log(`Result after 1 seconds: ${result}`);
    });
}
promiseTest14(5);
