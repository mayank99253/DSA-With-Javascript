function peakIndexInMountainArray(arr) {
   let low = 0, high = arr.length - 1;
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1; // Climbing up
        } else {
            high = mid; // Peak is at mid or on the left
        }
    }
    
    return low;
}

console.log(peakIndexInMountainArray([1,3,8,12,4,2])) // expected output 4