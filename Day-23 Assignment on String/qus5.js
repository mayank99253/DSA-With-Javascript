function greatestLetter(s) {
     let greatestLetter = "";

    for (let i = 0; i < 26; i++) {

        let lowercase = String.fromCharCode(97 + i);
        let uppercase = String.fromCharCode(65 + i);

        if (s.includes(lowercase) && s.includes(uppercase)) {
            greatestLetter = uppercase;
        }
    }
    console.log(greatestLetter , "")
    return greatestLetter; // return empty string if none found
}
greatestLetter("ABCDEF")