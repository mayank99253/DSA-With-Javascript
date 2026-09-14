/**
 * Recursively prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
    if(n==0) return
    console.log(n)
    printNumbers(n-1)  
}
printNumbers(5)