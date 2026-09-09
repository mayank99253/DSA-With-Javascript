function transposeMatrix(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let arr = []
    for (let i = 0; i < row; i++) {
        arr[i] = []
        for (let j = 0; j < col; j++) {
            arr[i][j] = matrix[j][i]
        }
    }
    return arr;
}
transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) // expected output : [[1,4,7],[2,5,8],[3,6,9]]