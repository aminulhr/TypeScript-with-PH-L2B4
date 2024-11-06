"use strict";
{
    //Access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        addDeposit(amount) {
            this.balance = this.balance + amount;
        }
    }
    const poorAccount = new BankAccount(123, "Md Poor", 100);
    let newBalance = poorAccount.addDeposit(10);
    console.log(newBalance);
}
