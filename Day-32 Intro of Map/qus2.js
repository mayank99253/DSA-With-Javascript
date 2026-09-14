function twoSum(nums, target) {
    let ans = [];
    let map = new Map();
    for(let i =0 ; i < nums.length ; i++){
        if(map.has(target - nums[i])){
            ans.push(map.get(target - nums[i]))
            ans.push(i)
        }else{
            map.set(nums[i], i)
        }
    }

    console.log(ans)
}
twoSum([2,7,11,15],9)