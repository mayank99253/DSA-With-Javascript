let prompt = require('prompt-sync')()


let GuessNum = Math.floor(Math.random() * 100)
let UserNum;
console.log(GuessNum);

do {
    UserNum = +(prompt("Enter Your Number "));
    if (UserNum < GuessNum) {
        console.log("Number Was too Close");
    }
    else if (UserNum > GuessNum) {
        console.log("Number Was Too Big");
    }
    else if (UserNum === GuessNum) {
        console.log("Congratulations You Guessed The Number");
    }

} while (UserNum !== GuessNum)