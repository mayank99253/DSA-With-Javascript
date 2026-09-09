function reversePrefix(word, ch) {
    let sum = ''
    for (let i = 0; i < word.length; i++) {
        if(word[i] === ch){
            for(let j = i ; j>=0; j--){
                sum = sum + word[j]
            }
            break
        }
    }
    for(let i = sum.length ; i <word.length ; i++){
        sum = sum + word[i]
    }

    return sum
}
reversePrefix("abcdefd", "d")
