{
  //
  //generic type: string array, number array, boolean array

  type genericArray<T> = Array<T>;

  // const rollNum:number[] =[1,2,3,4];
  const rollNum: genericArray<number> = [1, 2, 3, 4];

  //   const mentors: string[] = ["Jhanker", "Mir", "Mejbah", "Ali"];
  const mentors: genericArray<string> = ["Jhanker", "Mir", "Mejbah", "Ali"];

  //   const boolArray:boolean[]=[true,false,true,false];
  const boolArray: genericArray<boolean> = [true, false, true, false];

  //generic object
  const user11: genericArray<{ name: string; age: number }> = [
    {
      name: "rana",
      age: 23,
    },
    {
      name: "rakib",
      age: 18,
    },
  ];

  //generic tuple
  type genericTuple<x, y> = [x, y];
  const cupple: genericTuple<string, string> = ["md", "miss"];
  const userBio: genericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "haque", email: "@gmail.com" },
  ];
  //
}
