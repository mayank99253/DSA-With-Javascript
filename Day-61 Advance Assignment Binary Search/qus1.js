function shipWithinday(weights, days) {
    let low = Math.max(...weights), high = sum(weights);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let day = 1;
        let curWeight = 0

        for (let i = 0; i < weights.length; i++) {
            if (curWeight + weights[i] > mid) {
                day += 1
                curWeight = weights[i]
            } else {
                curWeight += weights[i]
            }
        }
        if (day <= days) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return low
}

function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(shipWithinday([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))// output = 15
