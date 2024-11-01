// Primitive Data Types
//number
let roll: number = 10;

//sting
let myname: string = "Aminul Haque Rana";

// Boolean
let isMarride: boolean = false;

// null
let x: null = null;
// undefined
let y: undefined = undefined;

// Non-Primitive Data Types\
// Array
let friends: string[] = ["Tanzil", "Numan", "Masud"];
friends.push("Raj");
console.log(friends);

// object
let user: {
  company: "Programing Hero"; // literal type
  readonly course: string;
  firstName: String;
  middleName?: String; // "?" question mark = optional type.
  lastName: String;
  isMarried: boolean;
} = {
  course: "L2B4",
  firstName: "Aminul",
  //   middleName: "Haque",
  lastName: "Rana",
  isMarried: false,
  company: "Programing Hero",
};
// user.course = "Main Course";  // as readonly its value can't change. If change it its give a error
