/**
 * Recursively calculates and prints n raised to the power p
 * Prints result up to 5 decimal places.
 * @param {number} n - base
 * @param {number} p - exponent
 */
function myPow(n, p) {
    let ans = solve(n, p);
    console.log(ans.toFixed(5))
    function fun(n, p) {
        if (p == 0) return 1;
        let ans = fun(n, Math.floor(p / 2));
        if (p % 2 === 0) return ans * ans
        return ans * ans * n
    }
    function solve(n, p) {
        if (p == 0) return 1;
        if (p < 0) {
            p = -p
            return 1 / fun(n, p)
        }
        return fun(n, p)
    }
}

