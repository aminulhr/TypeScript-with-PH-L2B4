"use strict";
{
    //
    // Type assertion
    let anything;
    anything = "Next Level dev";
    console.log(anything);
    const kgTOGm = (value) => {
        if (typeof value === "string") {
            const convertvalue = parseFloat(value) * 1000;
            return `The converted number is ${convertvalue}`;
        }
        if (typeof value === "number") {
            return `The value is ${value * 1000}`;
        }
    };
    const result = kgTOGm(12);
    const result2 = kgTOGm("12");
    console.log(result, result2);
    //
}
