function areNumbersAscending(s) {
    let arr = []
    sum = ''
    let result = true
    for (let i = 0; i < s.length; i++) {
        ascii = s.charCodeAt(i);
        nextAscii = s.charCodeAt(i + 1)
        if (ascii >= 48 && ascii <= 57) {
            if(arr.length === 0){
                arr.push(s[i])
                continue
            }
            if (nextAscii >= 48 && nextAscii <= 57) {
                sum = sum + s[i] + s[i + 1]
                arr.push(sum)
                sum = ''
                continue
            }
            let prev = arr[arr.length-1];
            let current = s[i];

            if(current.charCodeAt(0) !== prev.charCodeAt(1)){
                arr.push(s[i])
            }
        }
    }
    for(let i =0 ; i<arr.length ; i++){
        console.log(arr[i])
        if(Number(arr[i]) >= Number(arr[i+1])){
            result = false
            break
        }
    }
    return result

}

areNumbersAscending('1 box has 3 blue 4 red 2 green and 12 yellow marbles 13')