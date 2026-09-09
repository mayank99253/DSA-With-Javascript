function isAnagram(s1, s2) {
    let arr = new Array(26).fill(0);
    let result = true;
    
    for(let i = 0 ; i < s1.length ;i++){
        let ascii = s1.charCodeAt(i);
        if(ascii === 32) continue; //skip for space
        arr[ascii-97] = arr[ascii-97] + 1;
    }

    for(let i =0 ; i < s2.length ; i ++){
        let ascii = s2.charCodeAt(i);
        if(ascii === 32) continue;
        arr[ascii-97] = arr[ascii-97] - 1;
    }

    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] != 0) result = false
    }
    console.log(result)
    return result;
}
isAnagram('car' , 'ni')