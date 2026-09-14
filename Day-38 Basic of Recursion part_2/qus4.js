function reverseNum(n){
    if(n ===0) return 
    let digit , rev =0 ;
    while(n>0){
        digit = n%10;
        rev = rev*10 + digit
        n = Math.floor(n/10)
    }
    
    return rev
}

function reverse(n , rev = 0){
    if(n === 0 ) return rev;
    let digit = n% 10;
    rev = rev* 10 + digit;
    return reverse(Math.floor(n/10) , rev)
}
console.log(reverse(123))