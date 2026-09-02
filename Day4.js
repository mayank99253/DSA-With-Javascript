let prompt = require("prompt-sync")();

let a = Number(prompt("Enter a number: "))
let b = Number(prompt("Enter b number: "))
let c = Number(prompt("Enter c number: "))


if(a > b && a > c) console.log(a, "is the largest number")
if(b > a && b > c) console.log(b, "is the largest number")
else console.log(c , " c is greater then a and b ");


