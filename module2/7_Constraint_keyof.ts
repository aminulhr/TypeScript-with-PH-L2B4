{
  // Constraint using keyof operator
  type vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type owner = "bike" | "car" | "ship"; //manually
  type owner2 = keyof vehicle; // owner and owner2 aczacly return same value,

  const getPropert = <x, y extends keyof x>(obj: x, key: y) => {
    return obj[key];
  };
  const user = {
    name: "rana",
    age: 23,
    address: "Myn",
  };
  const mobile = {
    model: "redmi node",
    price: 12000,
  };
  const result = getPropert(user, "age");
  console.log(result);
  const result2 = getPropert(mobile, "model");
  console.log(result2);
}
