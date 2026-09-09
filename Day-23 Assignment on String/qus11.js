function digitSum(s, k) {
    while (s.length > k) {
        let newStr = ''
        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k)
            let sum = 0
            for (let j = 0; j < group.length; j++) {
                sum = sum + Number(group[j])
            }
            newStr += sum
        }
        s = newStr
    }
    return s
}


digitSum("11111222223", 3)