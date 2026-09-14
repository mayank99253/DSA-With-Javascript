/**
 * Recursive function to calculate sum up to N
 * @param {number} n
 * @returns {number}
 */
function sumUpToN(n) {
    if(n ==1) return n;
    return n+sumUpToN(n-1)
}
console.log(sumUpToN(5))
