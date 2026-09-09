var setZeroes = function (matrix) {
    let zeroRow = []
    let zeroCol =[]
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j]=== 0 ){
                zeroRow.push(i);
                zeroCol.push(j);
            }
        }
    }

    for(let i =0 ; i<zeroRow.length ; i++){
        let row = zeroRow[i]
        for(let j =0 ; j<matrix.length ; j++){
            matrix[row][j] = 0
        }
    }

    for(let i = 0 ; i<zeroCol.length ; i++){
        let col = zeroCol[i];
        for(let j =0 ; j<matrix.length; j++){
            matrix[j][col] = 0
        }
    }
    return matrix
};

setZeroes([[1, 1, 1],
[1, 0, 1],
[1, 1, 1]])

// 1 0 1
// 0 0 0
// 1 0 1