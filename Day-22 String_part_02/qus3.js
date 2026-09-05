/**
 * @param {string} str
 * @return {string}
 */
function capitalizeEnds(str) {
    let arr = str.split(" ");
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        if (word.length === 1) {
            result = result + word.toUpperCase()
        } else {
            let first = word.charAt(0).toUpperCase()
            let mid = word.substring(1, word.length - 1)
            let last = word.charAt(word.length - 1).toUpperCase()

            result = result + first + mid + last
        }

        if(i < arr.length - 1){
            result = result + " "
        }
    }
    return result
}
