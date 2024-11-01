"use strict";
{
    //object destructuring
    const userBio = {
        name: "AR",
        phone: "136565",
        address: {
            village: "surasram",
            post: "Ganggail",
            upazila: "Nandail",
        },
    };
    const { name, phone: number, //phone নামক প্রপার্টিকে number নাম দিয়ে রিপ্লেস করা হলো।
    address: { village, post, upazila: thana }, } = userBio;
    //upazila নামক প্রপার্টিকে thana  দিয়ে রিপ্লেস করা হলো।
    console.log(thana, number, village);
    //Array destructuring
    const students = ["Rakib", "Hasan", "munna", "sozib"];
    const [, , bestStudent] = students;
    console.log(bestStudent);
    const moreStudents = ["Rakib", "Hasan", "munna", "sozib", "babu", "abul"];
    const [...rest] = moreStudents; //use spread operator ...rest
    console.log(rest);
}
