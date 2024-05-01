"use strict";

let name = "Julien Ilboudo";
let posOfFirstSpace = name.indexOf(" ")
console.log(posOfFirstSpace);

let first = name.substring(0, posOfFirstSpace);
console.log(first);

let last = name.substring(posOfFirstSpace + 1);
console.log(last);

function parseAndDisplayName(name) {
    
}

console.log(name);


// let name = "Julien Ilboudo";
// let positionOfSpaceStart = name.indexOf(" ");
// let positionOfSpaceEnd = name.lastIndexOf(" ");

// let first = name.substring(0, positionOfSpaceStart);
// let middle = name.substring(positionOfSpaceStart + 1, positionOfSpaceEnd);
// let last = name.substring(positionOfSpaceEnd + 1);

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

let message = `Your first name ${first} and your last name is ${last}.`;

console.log(message);