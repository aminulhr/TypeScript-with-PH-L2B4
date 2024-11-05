{
  //Access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;
    // private/protected property ব্যবহার এর ক্ষেত্রে ভেরিয়েলে আগে  একটা আন্ডাস্কোর ‘_' দিতে হয়।

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    //   addDeposit(amount: number) {
    //     return (this._balance = this._balance + amount);
    //   }

    //use getter
    get balance() {
      return this._balance;
    }

    // getBalance() {
    //   return this.balance;
    // }
  }

  const poorAccount = new BankAccount(123, "Md Poor", 100);
  // const newBalance = poorAccount.addDeposit(10);
  poorAccount.deposit = 200;
  // let newBalance = poorAccount.getBalance();
  const newBalance = poorAccount.balance;
  console.log(newBalance);

  // for run this code > past on your terminal>
  //ts-node-dev --respawn --transpile-only module3\3.6_Access_modifiers.ts
}
