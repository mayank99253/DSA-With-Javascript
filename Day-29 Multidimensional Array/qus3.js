function rotate(matrix) {
    let n = matrix.length;

    // Step 1: Transpose
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            let temp = matrix[i][j];

            matrix[i][j] = matrix[j][i];

            matrix[j][i] = temp;
        }
    }

    // Step 2: Reverse each row manually
    for (let i = 0; i < n; i++) {

        let start = 0;
        let end = n - 1;

        while (start < end) {

            let temp = matrix[i][start];

            matrix[i][start] = matrix[i][end];

            matrix[i][end] = temp;

            start++;
            end--;
        }
    }

    return matrix;
}

console.log(
    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);

