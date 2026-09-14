function sumOfUnique(nums) {
    let map = new Map();

    for(let i=0 ;i<nums.length ; i++){
        if(map.has(nums[i])){
            map.set(nums[i] , (map.get(nums[i])+1))
        }else{
            map.set(nums[i] , 0)
        }
    }
    let sum = 0 
    for(let [keys , values] of map){
        if(values === 0){
            sum = sum + keys
        }
    }
    return sum
}
sumOfUnique([1,1,1,1,1])