{
  //
  // Type assertion
  let anything: any;
  anything = "Next Level dev";
  console.log(anything as string);

  const kgTOGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertvalue = parseFloat(value) * 1000;
      return `The converted number is ${convertvalue}`;
    }
    if (typeof value === "number") {
      return `The value is ${value * 1000}`;
    }
  };

  const result = kgTOGm(12) as number;
  const result2 = kgTOGm("12") as string;
  console.log(result, result2);
  //
}
