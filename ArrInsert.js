let prompt = require("prompt-sync")();

let Arrlength = prompt("Enter your Arr Length ");

let arr = [];

for (let i = 0; i <= Arrlength; i++) {
    let elements = prompt("Enter Your " + i + " element ");
    arr.push(elements)
}

console.log(arr , "length = ",Arrlength);