/**
 * Sort the colors in the numsay in-place.
 * @param {number[]} nums - The input numsay of colors
 * @return {number[]} - The sorted numsay
 */
function sortColors(nums) {
    let i = 0, j = 0, k = nums.length - 1
    while (i <= k) {
        if (nums[i] === 0) {
            swap(nums, i, j)
            j++, i++
        } else if (nums[i] === 2) {
            swap(nums, i, k)
            k--
        } else i++

        function swap(nums, i, j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp
        }
    }
    console.log(nums)

}

sortColors([2, 1, 2, 0, 1, 0])