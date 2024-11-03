{
  //mapped type
  const arrayOfnumber: number[] = [1, 2, 3, 4];
  const arrayOfstring: string[] = arrayOfnumber.map((number) =>
    number.toString()
  );
  console.log(arrayOfstring);

  type AreaNumber = {
    height: number;
    width: number;
  };

  // make string Array in AreaNumber Array
  // map type লিখার জন্য index সিগনেচার [] ব্যবহার করতে হবে।
  type AreaString = {
    [key in keyof AreaNumber]: string; // give string type array
    // [key in keyof AreaNumber]: boolean;  // give boolean type array
  };
  type Height = AreaNumber["height"]; //look up type

  //how to define custom-type in array with generic-type
  type AreaNumber2 = {
    height: number;
    width: number;
  };
  type AreaString2<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaString2<{ height: string; width: number }> = {
    height: "100",
    width: 100,
  };
}
