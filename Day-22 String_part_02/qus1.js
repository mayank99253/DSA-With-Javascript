function toggleCase(str) {
    let newStr = '';
    for(let i =0 ; i<str.length ; i++){
        if(str.charCodeAt(i) >=65 && str.charCodeAt(i)<=90){
            newStr = newStr + String.fromCharCode(str.charCodeAt(i)+32)
        }else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 ){
            newStr = newStr + String.fromCharCode(str.charCodeAt(i)-32)
        }else{
            newStr = newStr + str.charAt(i)
        }
    }
    return newStr
}

toggleCase("heLLo123")