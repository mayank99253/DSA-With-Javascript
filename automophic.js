// Approach 1 - we only checks for on digit
// let prompt = require('prompt-sync')()

// let num = Number(prompt("Enter Your Number "));

// let square = Math.pow(num , 2);
// let numResult = num % 10;
// console.log("Square " , square);
// console.log("Num % 10 " , numResult);

// let SquareResult = square % 10;
// console.log("Result" , SquareResult);

// if(square % 10 === num %10 ) console.log('Automophic Number');
// else console.log("Not Automophic Number");



// Approch - 2 we check all digits then give the answers

// let prompt = require('prompt-sync')()

// let num = +(prompt("Enter Your Number "));

// let square = num * num;

// isAutomophic = true

// while (num > 0) {
//     if (num % 10 === square % 10) {
//         isAutomophic = false;
//     }

//     num = Math.floor(num / 10);
//     square = Math.floor(square / 10);
// }

// if (isAutomophic) console.log("Automophic Number ");
// else console.log("Not Automophic Number");


function isAutomorphic(n) {
    let square = n * n;

    // count digits in n
    let temp = n;
    let count = 0;
    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }

    // get last 'count' digits from square
    let lastPart = square % (10 ** count);

    if (lastPart === n) return "Yes";
    else return "No";
}

isAutomorphic(25)




