/**
 * @param {number[]} arr - Rotated sorted array
 * @param {number} target - Value to search
 * @return {number} - Index of the target, or -1 if not found
 */
function search(arr, target) {
    let first = 0, last = arr.length - 1;

    while (first <= last) {
        let mid = Math.floor((first + last) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (arr[first] <= arr[mid]) {
            // Target lies within the sorted left half
            if (arr[first] <= target && target < arr[mid]) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        } 
        // Otherwise, the right half must be sorted
        else {
            // Target lies within the sorted right half
            if (arr[mid] < target && target <= arr[last]) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
    }

    return -1;
}

// Test Case 1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Expected Output: -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Expected Output: 4