Qus 1 = what is the time complexity in the binary Search in the worst case?
ans = O(log n)

Qus 2 = what is the ans of this qus ?
```
let x = 50;

if (x <= 50) {
    if (x === 50) {
       console.log("x is 50");
    } else {
        console.log("x is less than 50");
    }
} else {
    console.log("x is greater than 50");
}
```
ans = x is 50

Qus 3 = In the binary search what is the purpose of this code ? Math.floor((f/l)/2) 
ans = to get the middle index

Qus 4 = what kind of algorithm of binary search ?
ans = Divide and Conquer

Qus 5 = what the output of this binary search variant ?
```
function binarySearch(arr, target) {
  let l = 0, r = arr.length;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] < target) l = m + 1;
    else r = m;
  }
  return l;
}
console.log(binarySearch([1, 2, 4, 6], 5));

```
ans = 3