function largestGoodInteger(num) {
    let digit = "";
    for (let i = 0; i < num.length ; i++) {
        if (num[i]=== num[i+1] && num[i] === num[i+2]){
            let current = num[i]+  num[i+1] + num[i+2];
            if(digit === "" || current > digit){
                digit = current;
            }
        }
    }
    if(digit.length != 0 ) return digit 
    return "";
}
largestGoodInteger("6777133339")
