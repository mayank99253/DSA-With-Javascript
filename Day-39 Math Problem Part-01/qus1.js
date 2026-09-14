function findArrayGCD(arr) { 

    const minNum = Math.min(...arr);
    const maxNum = Math.max(...arr);

    const getGCD = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    console.log(getGCD(minNum, maxNum));
}