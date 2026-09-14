function wordPattern(pattern, s) {
    let words = s.split(" ");
if(words.length !== pattern.length){
    return false
}

let map1= new Map()
let map2= new Map()
    for(let i =0 ; i < pattern.length ; i++){
        let word = words[i];
        let char = s[i];

        if(map1.has(word) && map1.get(word) !== char){
            return false
        }

        if(map2.has(char) && map2.get(word) !== word){
            return false
        }

        map1.set(word, char)
        map2.set(char , word)
    }
    return true
}

wordPattern('ab', 'word word')