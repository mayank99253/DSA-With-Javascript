/**
 * @Qus = Sum of Absolute Diffrences
 */

class Solution {
  /**
   * @param {bigint[]} arr
   * @return {bigint}
   */
  sumOfAbsDiff(arr) {
    //bigInt does not accept directly 0 that's why we use 0n
    let sum = 0n;
    let diff;

    for (let i = 0; i < arr.length; i++) {
      for(let j = i+1 ; j<arr.length; j++){
        diff = arr[j] - arr[i];
        if(diff <0n){
          diff = -diff;
        }

        sum = sum + diff
      }
    }

    return sum;
  }
}

module.exports = { Solution };
