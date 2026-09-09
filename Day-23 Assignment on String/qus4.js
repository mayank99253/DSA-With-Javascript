  function strongPasswordCheckerII(password) {
    if(password.length < 8) return false;
    let hasNum = false;
    let hasUpper = false;
    let hasLower = false;
    let hasSpeacial = false;
    let i = 0;
    let specialChar = "!@#$%^&*()-+"
    while(i<password.length){
        if(i <password.length -1 && password[i] === password[i+1]){
            console.log(false)
        return false
    }
      if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
        hasUpper = true
      }else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
        hasLower = true
      }else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
        hasNum = true
      }else if(specialChar.includes(password[i])){
        hasSpeacial = true
      }
      i++
    }
    console.log( hasLower && hasNum && hasSpeacial && hasUpper)
    return hasLower && hasNum && hasSpeacial && hasUpper;
  }
strongPasswordCheckerII("Aa1!Aa1!")
