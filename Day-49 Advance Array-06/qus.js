/**
 * Find the majority element using Boyer-Moore Voting Algorithm.
 * @param {number[]} nums - The input array
 * @return {number} - The majority element
 */
function majorityElement(nums) {
    let ans = nums[0] , count = 0 ;
    for(let i =0 ; i <nums.length  ; i++){
        if(count ==0){
            ans = nums[i];
            count =1
        }else if(arr[i] == ans){count++
        }else{
            count--
        }

        return ans
    }
}

module.exports = { majorityElement };