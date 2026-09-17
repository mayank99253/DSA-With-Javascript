/**
 * Find the integer square root of n.
 * @param {number} n
 * @return {number}
 */
function mySqrt(n) {
    let first = 1, last = n , ans = 0 ;
    while(first<=last){
        let mid = Math.floor((first+last)/2);
        if(mid <= Math.floor(n/mid)){
            ans = mid 
            first = mid+1
        }else last = mid-1
    }
    return ans
}

