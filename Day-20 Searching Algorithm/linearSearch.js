function linearSearch(arr, target) {
    let i = -1;
    while(i<arr.length){
        if(arr[i] === target){
            break;
        }
        i++;
    }
    if(i === arr.length ) return -1
    return i
}

const ans = linearSearch([1,2,3,4,5,6,7,8,9,10],20)
console.log(ans)
