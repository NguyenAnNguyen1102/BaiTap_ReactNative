"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(newNumber) {
        this.balance += newNumber;
        console.log(`success, your balance is ${this.balance}`);
    }
    withDraw(money) {
        if (this.balance > 0) {
            if (this.balance >= money) {
                this.balance = this.balance - money;
                console.log(`Successfull withdrawal, the remaining amount is: ${this.balance}`);
            }
            else {
                console.log(`Money in the account is not enough!, please enter another number.`);
            }
        }
        else {
            console.log(`Money in the account is not enough!`);
        }
    }
    display() {
        console.log(this.balance);
    }
}
exports.BankAccount = BankAccount;
