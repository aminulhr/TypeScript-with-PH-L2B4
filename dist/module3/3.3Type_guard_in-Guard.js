"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result = add("2", 3);
    const result2 = add(2, 3);
    console.log(result);
    console.log(result2);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name} and I and not Admin`);
        }
    };
    const user1 = {
        name: "Md Normal",
    };
    const user2 = {
        name: "Md Admin",
        role: "Admin",
    };
    getUser(user1);
    getUser(user2);
}
