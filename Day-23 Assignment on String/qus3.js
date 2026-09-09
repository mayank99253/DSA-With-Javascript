// helper.js (template)
function checkString(s) {
  let i =0 ; 
  let value = true
  while(i<s.length){
    if(s.charCodeAt(i)=== 98 && s.charCodeAt(i+1) === 97){
      value = false
      break 
    }
    i++
  }
    return value;
}

module.exports = { checkString };

// retrun false if appear a after b  
