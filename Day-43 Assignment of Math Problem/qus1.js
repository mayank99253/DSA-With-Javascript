/**
 * Print all factors of the number in ascending order
 * @param {number} n
 */
function findFactors(n) {
    function fun(n , i=1){
        if(i > n) return;
        if(n%i ===0 ) process.stdout.write(i+" ")
        fun(n , i+1)
    }
    fun(n)
}

