function countFrequency(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let count = map.get(arr[i]) + 1
            map.set(arr[i], count)
        } else {
            map.set(arr[i], 1);
        }
    }
    let ans = [...map].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < ans.length; i++) {
        console.log(ans[i][0], ans[i][1])

    }
}
countFrequency([1, 1, 2, 2, 2, 3])