function cyclicSort(arr) {
    let i = 0
    while (i < arr.length) {
        let current = arr[i] - 1;
        if (arr[i] != arr[current]) {
            swap(arr, i, current)
        } else i++
    }
    return arr
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
console.log(cyclicSort([6, 1, 4, 5, 2, 3, 8, 7]))