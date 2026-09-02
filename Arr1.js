// Sum of absolute differences

function sumOfAbsoluteDifferences(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         let num = arr[i] - arr[j]
         sum = sum + num
      }
   }

   sum = Math.abs(sum)

}

sumOfAbsoluteDifferences([1, 2, 3, 4, 5])
