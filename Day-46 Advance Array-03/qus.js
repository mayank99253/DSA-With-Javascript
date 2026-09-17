/**
 * Duplicate each occurrence of zero in the array in-place.
 * @param {number[]} arr - The input array
 * @return {void}
 */
function duplicateZeros(arr) {
    // Step 1: Count total zeros to determine virtual expanded size
    let countOfZero = 0;
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] === 0) countOfZero++;
    }

    // Initialize pointers starting from the right (virtual expanded array)
    let i = arr.length - 1;
    let j = arr.length - 1 + countOfZero;

    // Step 2: Use your while loop moving BACKWARD
    while (i >= 0) {
        if (j < arr.length) {
            arr[j] = arr[i];
        }
        j--;

        if (arr[i] === 0) {
            if (j < arr.length) {
                arr[j] = 0;
            }
            j--;
        }
        i--;
    }
}
