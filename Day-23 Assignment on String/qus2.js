  /**
   * @param {string} s
   * @param {string} letter
   * @returns {number}
   */
  function percentageLetter(s, letter) {
    let i = 0;
    let count = 0;
    while(i<s.length){
      if(s.charCodeAt(i) === letter.charCodeAt(0)){
        count++
      }
      i++
    }

    let result = Math.floor((count/s.length)*100);

    return result
  }
percentageLetter("hello" ,"l")

