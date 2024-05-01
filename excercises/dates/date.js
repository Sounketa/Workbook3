"use strict";

let d = new Date ();
// Date with military time 
console.log(d.toString());

// Date; the day of the week, month, day, year
console.log(d.toDateString());

// Date; the day of the week, month, day, year, shortend militaty timme
console.log(d.toUTCString());

// Date; 5/1/2024 and time 1:59:33 PM
console.log(d.toLocaleString());