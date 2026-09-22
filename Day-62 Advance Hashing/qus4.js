/*
 * @param {number[]} arr - The input array
 * @param {number} k - Window size
 * @returns {number[]} - Array of counts of distinct elements in each window
 */
function countDistinctInWindow(arr, k) {
    if (!arr || k <= 0 || k > arr.length) return [];

    let map = new Map();
    let ans = [];

    // Build frequency map for the FIRST window of size k
    for (let i = 0; i < k; i++) {
        if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
        else map.set(arr[i], 1);
    }
    ans.push(map.size);

    let i = 0, j = k;
    while (j < arr.length) {
        // Add incoming element arr[j]
        if (!map.has(arr[j])) map.set(arr[j], 1);
        else map.set(arr[j], map.get(arr[j]) + 1);

        // Remove outgoing element arr[i]
        if (map.get(arr[i]) == 1) {
            map.delete(arr[i]);
        } else {
            map.set(arr[i], map.get(arr[i]) - 1);
        }

        ans.push(map.size);
        i++, j++;
    }
    return ans;
}
console.log(countDistinctInWindow([1, 2, 1, 3, 4], 3)) // expected output = [2, 3, 3]