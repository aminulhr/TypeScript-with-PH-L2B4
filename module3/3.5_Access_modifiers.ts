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
    addDeposit(amount: number) {
      return (this._balance = this._balance + amount);
    }
    // getBalance() {
    //   return this.balance;
    // }
  }

  // child account 'studentAccount' create by extends method form BankAccount
  class studentAccount extends BankAccount {
    // privet property can not access hear or any child class , if we want to access privet property in child class but can not access in instance , then we use to 'protected' property
    test(){
      this.
    }
  }
  
  
  const poorAccount = new BankAccount(123, "Md Poor", 100);
  const newBalance = poorAccount.addDeposit(10);
  // let newBalance = poorAccount.getBalance();
  console.log(newBalance);

  // for run this code > past on your terminal>
  //ts-node-dev --respawn --transpile-only module3\3.5_Access_modifiers.ts
}
