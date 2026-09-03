/**
 * @Qus = Ninimum value to add for a balanced Array
 * Balance means equal both side of array => left half = right half
 */

class Solution {
    minAddForBalance(arr) {
        const leftHalf = Math.trunc((arr.length) /2 )
        const rightHalf = arr.length - leftHalf;

        let leftHalfSum = 0;
        let rightHalfSum = 0;

        let result;

        for(let i = 0 ; i < leftHalf ; i++){
            leftHalfSum = leftHalfSum + arr[i]
        }
        for(let j = leftHalf ; j < arr.length ; j++){
            rightHalfSum = rightHalfSum + arr[j]
        }

        result = leftHalfSum - rightHalfSum;
        if(result <0) result = -result

        return result
    }
}

module.exports = { Solution };
