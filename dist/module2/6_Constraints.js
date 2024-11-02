"use strict";
{
    const addStudentInCourse = (student) => {
        const course = "Next Level web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addStudentInCourse({
        id: 3333,
        name: "md riaz",
        email: "r@gmail.com",
        devType: "front",
    });
    const student2 = addStudentInCourse({
        id: 3344,
        name: "md siraz",
        email: "s@gmail.com",
        devType: "full Stack",
    });
    const student3 = addStudentInCourse({
        id: 2233,
        name: "md rasel",
        email: "rasel@gmail.com",
        isMac: true,
    });
    // const student4 = addStudentInCourse({
    //   others: 'abcd'
    // });
}
