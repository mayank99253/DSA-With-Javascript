function productExceptSelf(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue
            product = product * nums[j]
        }
        ans.push(product)
    }

    return ans
}

productExceptSelf([1, 2, 3, 4, 5])