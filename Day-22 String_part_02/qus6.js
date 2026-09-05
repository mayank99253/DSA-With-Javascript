function mostWordsFound(sentences) {
    let str;
    let strLength;
    let countWord = 0;
    for (let i = 0; i < sentences.length; i++) {
        str = sentences[i];
        strLength = str.split(" ").length;
        if (countWord < strLength) countWord = strLength;
    }

    return countWord;
}

mostWordsFound(["coding is fun", "practice makes perfect", "consistency is the key to success"])