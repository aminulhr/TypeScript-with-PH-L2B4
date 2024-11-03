{
  //utility types
  // pick type = get property
  type person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type pickNameAge = Pick<person, "age" | "name">;
  //omit = remove property
  type contsctInfo = Omit<person, "name" | "age">;

  //Required type = make a new type , thats all  property are required , from a type
  type makeRequired = Required<person>;

  // partial type = make all property optional
  type makePartial = Partial<person>;

  // readOnly = whan i want to my object value can not change , than use readOnly type
  type personReadonly = Readonly<person>;
  const user: personReadonly = {
    name: "rana",
    age: 23,
    contactNo: "123234",
  };
  //   user.age = 25; // can not change value , because this type is Readonly.
}
// Record
// type MyObj ={
//     a:string;
//     b:string;
// }
type MyObj = Record<string, string>;
const obj: MyObj = {
  a: "aa",
  b: "bb",
  c: "cc",
};

const EmptyObj: Record<string, unknown> = {
  name: "rana",
  age: 23,
  isMarride: false,
};
