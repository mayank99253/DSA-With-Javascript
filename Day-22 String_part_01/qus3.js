/**
 * @param {string} str
 * @return {string}
 */
function isPalindromeInPlace(str) {
    let i = 0 , j = str.length - 1
    let palindrome = true;
    while(i<j){
        if(str.charAt(i) !== str.charAt(j)){
            palindrome = false;
            break;
        }
        i++;
        j--;
    }
    return palindrome ? 'Yes' : 'No'
}
