/**
 * Sort the array in-place using quick sort
 * @param {number[]} arr - The array to sort
 * @param {number} low - Starting index
 * @param {number} high - Ending index
 * @return {void}
 */
function quickSort(arr, low, high) {
    function findPartition(arr, f, l) {
        let i = f - 1, j = f, pivot = arr[l]
        while (j < l) {
            if (arr[j] <= pivot) {
                i++
                swap(arr, i, j);
            }
            j++
        }
        i++
        swap(arr, i, j)
        return i;
    }
    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    function quick(arr, f, l) {
        if (f >= l) return
        let pIdx = findPartition(arr, f, l)
        quick(arr, f, pIdx - 1)
        quick(arr, pIdx + 1, l)
    }

    quick(arr , low, high)
    return arr
}
