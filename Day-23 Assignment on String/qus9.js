function digitCount(num) {
    let count = 0;
    let equal ;
    let result = false
    for(let i = 0; i<num.length ; i++){
        for(let j = i+1; j <num.length; j++){
            if(num[i] === num[j]){
                equal = num[i]
                count++
                if(count == equal){
                    result = true
                    break
                }
            }
        }
    }
    return result
}
digitCount('1210')
digitCount('0230')
