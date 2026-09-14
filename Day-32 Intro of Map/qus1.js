/**
 * Find the first character that appears twice in a string.
 * @param {string} s - The input string
 * @return {string} - The first repeated character
 */
function repeatedCharacter(s) {
    let map = new Map();
    for(let i = 0 ; i <s.length ; i++){
        if(map.has(s.charAt(i))){
            return s.charAt(i)
        }else{
            map.set(s.charAt(i) , 1)
        }
    }
}

module.exports = { repeatedCharacter };