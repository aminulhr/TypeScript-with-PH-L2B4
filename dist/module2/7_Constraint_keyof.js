"use strict";
{
    const getPropert = (obj, key) => {
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
