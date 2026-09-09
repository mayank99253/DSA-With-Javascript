function removeDigit(number, digit) {
    let result;
    let arr = number.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === digit) {
            arr.splice(i, 1)
            break
        }

    }

    result = arr.join("")
    return result
}

removeDigit('1231', '1')
// expected output = 231