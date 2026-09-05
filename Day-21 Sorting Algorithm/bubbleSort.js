// Bubble Sort 

let arr = [1, 2, 5, 4, 7, 8, 6, 9, 3, 10] // length = 10
let temp;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr)