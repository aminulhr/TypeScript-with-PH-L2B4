//Normal function

function add(num1: number, num2: number = 10): number {
  // 10 is default value of num2
  return num1 + num2;
}
add(2, 3);

//Arrow function
const addArrow = (num3: number, num4: number): number => num3 + num4;
addArrow(5, 7);

// note: js এর মাঝে object ar Property কে এসসেস করতে হলে this ব্যবহার করতে হয়
// আর Arrow function এ this ব্যবহার করা যায় না।

// object --> function --> Method
const poorUser = {
  name: "Aminul",
  balance: 0,
  addBalance(balance: number): string {
    return `my balance is: ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 4];
// const getArrayValue = arr.map((num)=>num*num);
const getArrayValue: number[] = arr.map((num: number): number => num * num);
console.log(getArrayValue);
