/**
 * Find the maximum sum of a contiguous subarray using Kadane's Algorithm.
 * @param {number[]} nums - The input array
 * @return {number} - The maximum sum
 */
function maxSubArray(nums) {
    let i = 0 , sum = 0 , max = nums[i] ;

    while(i<nums.length){
        sum += nums[i]
        if(max < sum ) max = sum;
        if(sum < 0 ) sum = 0
        i++
    }

    return max

}
