let n = 10;

// for(let i = 0 ; i<n ; i++){
//     console.log("");
//     for(let j = 0 ; j<n ; j++){
//         process.stdout.write("* ")
//     }
// }

// * * * * 
// * * * *
// * * * *
// * * * *

// DONE ✅

// for(let i = 0 ; i<n ; i++){
//     console.log();
//     for(let j = 0 ; j<i ; j++){
//         process.stdout.write("* ")
//     }
// }


// *
// * *
// * * *
// * * * *
// * * * * * 

// function printRightTriangleNumbers(n) {
// for (let i = 1; i <= n; i++) {
//         let row = [];

//         for (let j = 1; j <= i; j++) {
//             row.push(j);
//         }

//         console.log(row.join(" "));
//     }
// }
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// function printRightTriangleAlphabets(n) {
//     let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for(let i = 0 ; i<n ;i++){
//         for(let j = 0 ; j < i+1 ; j++){
//             process.stdout.write(" " + letters.slice(j, j+1))
//         }
//         console.log()
//     }
// }

// printRightTriangleAlphabets(5)
// A
// A B
// A B C
// A B C D
// A B C D E


// function printInvertedRightTriangle(n) {
//     for(let i =0 ; i<n ; i++){
//         for(let j =n ; j>i ; j--){
//             process.stdout.write("* ")
//         }
//         console.log()
//     }
// }

// printInvertedRightTriangle(5)
// * * * *
// * * *
// * *
// *


// function printMirroredRightTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = n; j >=i+1; j--) {
//             process.stdout.write("  ")
//         }
//         for (let k = 1; k <= i; k++) {
//             process.stdout.write("* ")
//         }
//         console.log()
//     }
// }

// printMirroredRightTriangle(5)

//       *
//     * *
//   * * *
// * * * *


// Tringle Star
// function printMirroredRightTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = n; j >=i+1; j--) {
//             process.stdout.write(" ")
//         }
//         for (let k = 1; k <= i; k++) {
//             process.stdout.write("* ")
//         }
//         console.log()
//     }
// }

// printMirroredRightTriangle(5)

//     * 
//    * *
//   * * *
//  * * * *
// * * * * *


// function printXShapePattern(n) {
//     for (let i = 1; i < n+1; i++) {
//         for (let j = 1; j < n+1; j++) {
//             process.stdout.write(' ')
//             if (i == j || i+j === n+1) {
//                 process.stdout.write('*')
//             }
//             else{
//                 process.stdout.write(' ')
//             }
//         }
//         console.log();
//     }
// }
// *       * 
//   *   * 
//     * 
//   *   * 
// *       * 
// printXShapePattern(5)



function printVShapePattern(n) {
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (i == j) {
                process.stdout.write('*')
            } else {
                process.stdout.write(' ')
            }
        }
        
        for (let k = 1; k < n; k++) {
            if (k+i == n) {
                process.stdout.write('*')
            } else {
                process.stdout.write(' ')
            }
        }
        console.log()
    }
}
printVShapePattern(5)

// *       *
//  *     *
//   *   *
//    * *
//     *