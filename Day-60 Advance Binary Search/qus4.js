function searchRange(nums, target) {
    let ans = new Array(2)

    ans[0] = solve(nums, 0, nums.length, true, target)
    ans[1] = solve(nums, 0, nums.length, false, target)
    return ans
}

function solve(arr, f, l, isStarting, t) {
    ans = -1;
    while (f <= l) {
        let mid = Math.floor((f + l) / 2)
        if (arr[mid] == t) {
            ans = mid
            if (isStarting) l = mid - 1
            else f = mid + 1
        }
        else if (arr[mid] < t) f = mid + 1
        else l = mid - 1
    }
    return ans
}