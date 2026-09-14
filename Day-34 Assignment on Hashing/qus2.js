function distributeCandies(n, k, candies) {
    let freqMap = new Map();
    for (let c of candies) {
        freqMap.set(c, (freqMap.get(c) || 0) + 1);
    }
    let counts = [...freqMap.values()];
    let m = counts.length;

    if (m < k) return 0;

    let low = 0, high = Math.floor(n / k);
    let ans = 0;

    function isFeasible(t) {
        let total = 0;
        for (let c of counts) {
            total += Math.min(c, t);
        }
        return total >= k * t;
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isFeasible(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
}

distributeCandies(7,3,[1,1,2,2,3,3,4])