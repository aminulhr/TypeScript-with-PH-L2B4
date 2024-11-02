"use strict";
//Normal function
function add(num1, num2 = 10) {
    // 10 is default value of num2
    return num1 + num2;
}
add(2, 3);
//Arrow function
const addArrow = (num3, num4) => num3 + num4;
addArrow(5, 7);
// note: js এর মাঝে object ar Property কে এসসেস করতে হলে this ব্যবহার করতে হয়
// আর Arrow function এ this ব্যবহার করা যায় না।
// object --> function --> Method
const poorUser = {
    name: "Aminul",
    balance: 0,
    addBalance(balance) {
        return `my balance is: ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3, 4];
// const getArrayValue = arr.map((num)=>num*num);
const getArrayValue = arr.map((num) => num * num);
console.log(getArrayValue);
