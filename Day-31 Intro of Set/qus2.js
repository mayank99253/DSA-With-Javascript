function isPangram(sentence) {
    let char = 'abcdefghijklmnopqrstuvwxyz'
    let set = new Set(sentence.split(""));
    for (let i = 0; i < char.length; i++) {
        if(!set.has(char.charAt(i))) return false
    }
    return true

}
isPangram("abcdefghijklmnoqprstuvwxyz")