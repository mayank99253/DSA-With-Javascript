/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
    let sum = 0;
    let maxLength = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        sum += (nums[i] === 0 ? -1 : 1);

        if (sum === 0) {
            maxLength = i + 1; 
        } 
        else if (map.has(sum)) {
            let length = i - map.get(sum);
            maxLength = Math.max(maxLength, length);
        } 
        else {
            map.set(sum, i);
        }
    }

    return maxLength;
}
console.log(findMaxLength([0, 1, 0])) // expected output = 2
console.log(findMaxLength([1, 1, 1, 0, 0, 1, 0])) // expected output = 6
