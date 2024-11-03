"use strict";
{
    //mapped type
    const arrayOfnumber = [1, 2, 3, 4];
    const arrayOfstring = arrayOfnumber.map((number) => number.toString());
    console.log(arrayOfstring);
}
