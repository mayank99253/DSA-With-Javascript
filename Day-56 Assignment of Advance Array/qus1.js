function replaceElements(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let maxRight = -1
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] > maxRight) {
                maxRight = arr[j]
            }
        }
        ans.push(maxRight)
    }
    console.log(ans)
}
// more optimal
function replaceElements2(arr) {
    let maxRight = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = maxRight; 
        if (current > maxRight) {
            maxRight = current; 
        }
    }

    return arr;
}

console.log(replaceElements2([17, 18, 5, 4, 6, 1]));



replaceElements([17, 18, 5, 4, 6, 1])