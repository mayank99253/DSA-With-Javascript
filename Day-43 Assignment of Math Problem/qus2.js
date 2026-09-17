function kthFactor(n, k) {
    return solve(n, k)
    function solve(n, k, i = 1, count = 0) {
        if (i > n) return -1
        if (n % i === 0) {
            count++
            if (count === k) {
                return i
            }
        }
        return solve(n, k, i + 1, count)
    }

}

