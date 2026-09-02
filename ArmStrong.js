function is_armstrong(nStr) {
    let count = 0
    let num2 = nStr;
    let num = nStr;
    let sum = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    for (let i = 0; i < count; i++) {
        let digit = num2 % 10;
        sum = sum + Math.pow(digit, count)
        num2 = Math.floor(num2 / 10);
    }
    console.log(sum);

}

is_armstrong(153)