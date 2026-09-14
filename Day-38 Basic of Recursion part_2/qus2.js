let first = 0, sec = 1;
process.stdout.write(first + " " + sec + " ")

function febonacci(n, first, sec) {
    if (n === 0 || n < 0) {
        process.stdout.write("Invalid input");
        return;
    }
    if (n === 1) {
        process.stdout.write("0");
        return;
    }
    if (n === 0) return;
    let third = first + sec

    process.stdout.write(third + " ")
    return febonacci(n - 1, sec, third)
}

febonacci(10 - 2, first, sec)