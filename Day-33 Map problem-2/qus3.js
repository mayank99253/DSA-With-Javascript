function mostFrequentEven(nums) {
    let freq = -1 ;
    let ans = 0
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0){
            if (map.has(nums[i])) {
            map.set(nums[i], (map.get(nums[i]) + 1))
        } else {
            map.set(nums[i], 1)
        }
        }
    }

    for (let [keys, values] of map) {
        if(freq < values){
            freq = values
            ans = keys
        }else if(freq === ans){
            ans = Math.min(ans , keys)
        }
    }

    return ans
}

mostFrequentEven([1, 3, 2, 8, 2, 3, 8])