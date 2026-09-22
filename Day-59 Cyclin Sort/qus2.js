function missingNumber(arr) {
    let i = 0 ;
    while(i< arr.length){
        let cur = arr[i]
        if(arr[i] !== arr[cur] && arr[i]<arr.length){
            swap(arr, i , cur)
        }else{
            i++
        }
    }
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j] != j){
            return j
        }
    }
    return arr.length
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
console.log(missingNumber([0, 1, 2, 3, 5])) // expected = 4