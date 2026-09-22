/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
    let set = new Set([...nums])
    let loggest = 0
    for (a of set) {
        if (!set.has(a - 1)) {
            let count = 1
            while (set.has(count + a)) count++
            loggest = Math.max(loggest, count)
        }
    }
    return loggest;
}

console.log(longestConsecutive([10, 5, 12, 6, 13, 11])) // expected output = 4
