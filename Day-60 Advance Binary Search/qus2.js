function searchInsert(nums, target) {
    let first = 0, last = nums.length - 1;

    while (first < last) {
        let mid = Math.floor((first + last) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            first = mid + 1
        }
        else {
            last= mid - 1
        }
    }
    if(first == 0)return -1
    return first

}
console.log(searchInsert([1, 3, 5, 6], 5)) // expected output = 2