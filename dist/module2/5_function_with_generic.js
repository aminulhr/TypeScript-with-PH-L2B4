"use strict";
{
    // function with generic
    const createArray = (param) => {
        return [param];
    };
    const res1 = createArray("bangal");
    const res2 = createArray(false);
    const createGenericObject = createArray({
        id: 1234,
        name: "Rana",
    });
    //   console.log(res1);
    //   console.log(res2);
    //   console.log(createGenericObject);
    // tuple with generic
    const createArrayTuple = (param1, param2) => {
        return [param1, param2];
    };
    const result1 = createArrayTuple("bangal", 1234);
    const res20 = createArrayTuple("india", {
        name: "vhrot",
    });
    //   console.log(res20);
    //more
    const addStudentInCourse = (student) => {
        const course = "Next Level web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addStudentInCourse({
        name: "md riaz",
        email: "r@gmail.com",
    });
    const student2 = addStudentInCourse({
        name: "md siraz",
        email: "s@gmail.com",
        dev: "full Stack",
    });
    const student3 = addStudentInCourse({
        name: "md rasel",
        email: "rasel@gmail.com",
        isMac: true,
    });
    //   console.log(student1, student2, student3);
    // to see the output in vs terminal run bellow code --->
    //   ts-node-dev --respawn --transpile-only module2\1_assertion.ts
}
