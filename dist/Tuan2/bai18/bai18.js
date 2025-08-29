"use strict";
//18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}`, email: `user${id}@example.com` });
        }, 1000);
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield getUser(1);
            console.log("User nhận được:", user);
        }
        catch (error) {
            console.error("Có lỗi xảy ra:", error);
        }
    });
}
run();
