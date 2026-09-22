/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    let ans = [], map = new Map();

    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], (map.get(nums2[i]) || 0) + 1);
    }

    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            ans.push(nums1[i]);
            if (map.get(nums1[i]) === 1) {
                map.delete(nums1[i]);
            } else {
                map.set(nums1[i], map.get(nums1[i]) - 1);
            }
        }
    }

    return Array.from(new Set(ans));
}
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) // expected output = [4,9]