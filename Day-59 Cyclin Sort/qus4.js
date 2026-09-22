/**
 * Find the first missing positive integer.
 * @param {number[]} arr - The input array
 * @return {number} - The smallest missing positive integer
 */
function firstMissingPositive(arr) {
    let i = 0
    while (i < arr.length) {
        let current = arr[i]-1
        if (arr[i] > 0 &&
            arr[i] <= arr.length &&
            arr[i] !== arr[current]) {
            swap(arr, i, current)
        } else i++
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== j + 1) {
            return j + 1
        }
    }
    return arr.length + 1
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}