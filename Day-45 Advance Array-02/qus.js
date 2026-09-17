/**
 * Remove duplicates in-place from a sorted array.
 * @param {number[]} arr 
 * @return {number} - Count of unique elements
 */
function removeDuplicates(arr) {
    let i = 0 ,j =1;
    while(i<arr.length-1){
        if(arr[i] !== arr[i+1]){
            arr[j] = arr[i+1]
            j++
        }
        i++
    }

    return j
    
}
