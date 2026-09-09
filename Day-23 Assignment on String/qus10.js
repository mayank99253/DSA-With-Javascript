function removeAnagrams(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (result.length === 0) {
            result.push(words[i]);
            continue;
        };

        let currentWord = words[i];
        let previousWord = result[result.length - 1];

        if (currentWord.length !== previousWord.length) {
            result.push(currentWord);
            continue;
        }

        let arr = new Array(26).fill(0);
        for (let j = 0; j < currentWord.length; j++) {
            arr[currentWord.charCodeAt(j) - 97]++;
        }
        for (let k = 0; k < previousWord.length; k++) {
            arr[previousWord.charCodeAt(k) - 97]--;
        }

        let isAnagram = true
        for (let a = 0; a < arr.length; a++) {
            if (arr[a] !== 0) {
                isAnagram = false
                break;
            }
        }
        if (!isAnagram) {
            result.push(currentWord)
        }
    }
    return result
}
removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd'])