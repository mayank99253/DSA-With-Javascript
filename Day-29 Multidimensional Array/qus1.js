function diagonalSum(mat) {
    let sum = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if ((i+j) % ( mat.length -1 ) === 0 || i === j) {
                sum = sum + mat[i][j]
            }
        }
    }
    return sum
}
diagonalSum([[1,2,3],[4,5,6],[7,8,9]]) // expected output = 25 
diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1],[1,1,1,1]]) // expected output = 8