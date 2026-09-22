function missingNumber(nums) {
    let i = 0, ans = [];
    while (i < nums.length) {
        let cur = nums[i] - 1
        if (nums[i] !== nums[cur]) {
            swap(nums, i, cur)
        } else {
            i++
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != j + 1) {
            ans.push(j + 1)
        }
    }
    console.log(nums)
    return ans
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
console.log(missingNumber([1, 2, 3, 3, 5, 2, 7])) //expected = [4,6]