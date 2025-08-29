export class BankAccount{
    balance:number;
    constructor(balance:number){
        this.balance= balance;
    }

    deposit(newNumber:number):void{
        this.balance+=newNumber;
        console.log(`success, your balance is ${this.balance}`);
    }

    withDraw(money:number):void{
        if(this.balance>0){
            if(this.balance>=money){
                this.balance = this.balance-money;
                console.log(`Successfull withdrawal, the remaining amount is: ${this.balance}`);
            }else{
                console.log(`Money in the account is not enough!, please enter another number.`);
            }
        }else{
             console.log(`Money in the account is not enough!`);
        }
    }

    display():void{
        console.log(this.balance);
    }
}