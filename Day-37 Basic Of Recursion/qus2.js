/**
 * Recursively prints natural numbers from 1 to n, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
      if(n === 0 ) return
      printNumbers(n-1)
      process.stdout.write(n+" ")
   }
printNumbers(5)