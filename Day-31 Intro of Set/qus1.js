function countJewelsInStones(jewels, stones) {
    let count =0
    let set = new Set(jewels.split(""))
    for(let i =0 ; i<stones.length ; i++){
        if(set.has(stones.charAt(i))) count++
    }
    return count;
}

countJewelsInStones("ABC" ,"abcABCabcABC")