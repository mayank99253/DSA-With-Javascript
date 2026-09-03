/**
 * @qus - Multiplication of Previous to next 
 */
class Solution {
  /**
   * @param {number[]} arr
   * @returns {number[]} updated array
   */
  multiplyPrevNext(arr) {
    let result = [];
    let multi;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        result.push(arr[i] * arr[i + 1]);
      } else if (i === arr.length - 1) {
        result.push(arr[i] * arr[i - 1])
      } else {
        result.push(arr[i - 1] * arr[i + 1]);
      };
    }
    return result;
  }
}

module.exports = { Solution };
