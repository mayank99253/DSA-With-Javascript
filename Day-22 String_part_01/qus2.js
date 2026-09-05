/**
 * @param {string} str
 * @return {string}
 */
 
function reverseString(str) {
    let rev = '';
    let i = str.length-1;
    while(i>=0){
        rev = rev + str.charAt(i)
        i--
    }

    return rev
}
