{
  // সকল premitive data  তে type alias ব্যবহার করবো। আর object এর ক্ষেত্রে  type alias  ও ব্যবহার করতে পারি আবার interface  ও ব্যবহার করতে পারি।
  type user1 = {
    name: string;
    age: number;
  };
  interface user2 {
    name: string;
    age: number;
  }
  type userWithRoll = user1 & { roll: string };
  interface userWithRoll2 extends user2 {
    roll: number;
  }
  const user1: userWithRoll = {
    name: "rana",
    age: 23,
    roll: "509",
  };
  const userWithRoll2: userWithRoll2 = {
    name: "rana",
    age: 23,
    roll: 123,
  };

  //array declaker by interface
  interface roll2 {
    [index: number]: number;
  }
  const rollNumber: roll2 = [1, 2, 3];

  // interface in function
  type Add = (num1: number, num2: number) => number; //alias type
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}
