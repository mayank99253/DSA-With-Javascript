function pivotIndex(nums) {
    let totalSum = 0 , leftSum = 0 ;
    //sum of array nums
    for(let i = 0 ; i<nums.length ; i++){
        totalSum+=nums[i]
    }
    for(let i = 0; i<nums.length; i++){
        let rightSum = totalSum - (leftSum+nums[i])

        if(rightSum === leftSum) return i

        leftSum+=nums[i]
    }

    return -1
}

pivotIndex([1,7,3,6,5,6]) // expected output  = 3

