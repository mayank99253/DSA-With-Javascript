function swapNumbers(a, b) {
    a = a ^ b // 30
    b = b ^ a
    a = b ^ a

    return a , b
}
swapNumbers(10 , 20);