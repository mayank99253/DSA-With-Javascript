let arr = [2, 3, 3, 4];

arr[2] = (6 + 7) + arr[3];

if ((1 + 7 + arr[0]) < (7 ^ arr[1])) {
    arr[1] = arr[3] + arr[0];
} else {
    arr[3] = arr[2] + arr[1] + arr[1];
}

if ((arr[3] + arr[0]) > (arr[0] - arr[3])) {
    arr[3] = (10 & 8) + arr[2];
}

console.log(arr[1] + arr[2] + arr[3]);