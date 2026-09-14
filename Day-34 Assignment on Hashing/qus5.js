function findErrorNums(nums) {
    let map = new Map()

    for(let i =0 ; i <nums.length ; i++){
        if(map.has(nums[i])){
            map.set(nums[i] , (map.get(nums[i])+1))
            return [nums[i] , map.get(nums[i]) ]
        }else{
            map.set(nums[i] , nums[i])
        }
    }
}
findErrorNums([1, 2, 2, 4])

function funn(a, b, c) {
    c = b + c;
    b = (b + b) + b;
    c = (10 + 6) & a;
    c = (4 + 8) & b;
    b = (a + c) & c;
    console.log( a + b + c);
}

funn(1, 2, 7)