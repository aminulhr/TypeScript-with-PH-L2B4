{
  // Ternary oparator
  const age: number = 18;
  //   if (age >= 18) {
  //     console.log("adult");
  //   } else {
  //     console.log("Not-adult");
  //   }
  const isAdult = age >= 18 ? "Adult" : "Not-adult";
  console.log(isAdult);
  console.log({ isAdult }); //print as object

  //   null and undefined এর উপর ভিত্তি করে কোনো ডিফল্ড ভেল্যু সেট করতে হলে "nullish coalescing operator " ব্যবহার করা হয়।
  //nullish coalescing operator
  // null/undefined --> decision making;
  const isAdmin = "";
  const result = isAdmin ?? "Guest";
  console.log({ result }); //print as object

  const isAdmin2 = undefined;
  const result2 = isAdmin2 ?? "Guest2";
  console.log({ result2 }); //print as object

  //why i can't use Ternary operator in this case
  const result3 = isAdmin ? isAdmin : "Guest";
  console.log({ result3 }); //print as object

  //optional chaining
  type user = {
    name: string;
    age: number;
    adderss: {
      vilage: string;
      post?: number;
      thana: string;
    };
  };
  const person: user = {
    name: "rana",
    age: 23,
    adderss: {
      vilage: "abd",
      thana: "dbc",
    },
  };
  const getPerson = person.adderss.post ?? "post not found";
  //এখানে রিজাল্ট যেহেতু nudefined আসবে , তাই null and undefined এর উপর ভিত্তি করে কোনো ডিফল্ড ভেল্যু সেট করতে হলে "nullish coalescing operator " ব্যবহার করতে পারি।
  console.log(getPerson);
}
