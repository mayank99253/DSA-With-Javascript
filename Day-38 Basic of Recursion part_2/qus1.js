function fun(n) {
    if (n === 0 || n === 1) return 1;
    return n * fun(n - 1)

    // let fact = n
    // for (let i = n - 1; i >= 1; i--) {
    //     fact = fact * i
    // }
    // console.log(fact)
}

console.log(fun(5))