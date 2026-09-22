function runningSum(nums) {
    let sum = 0 , ans =[]
    for(let i = 0; i<nums.length; i++){
        sum = sum + nums[i]
        ans.push(sum)
    }
    console.log(ans)
}
runningSum([1, 2, 3, 4]) // [1 ,3 ,6 ,10]