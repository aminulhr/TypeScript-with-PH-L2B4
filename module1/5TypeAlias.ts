{
  //object Alias
  type person = {
    village: string;
    upzila: string;
    zila: string;
    postcode?: number; // '?' optional type
    number?: number; // '?' optional type
  };

  const person1: person = {
    village: "surasram",
    upzila: "Nandail",
    zila: "Mymensingh",
    number: 12345678,
  };
  const person2: person = {
    village: "islamadab",
    upzila: "fulfur",
    zila: "Tangail",
  };
  const person3: person = {
    village: "trishal",
    upzila: "sadar thana",
    zila: "Mymensingh",
    postcode: 3456,
  };

  //function Alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
