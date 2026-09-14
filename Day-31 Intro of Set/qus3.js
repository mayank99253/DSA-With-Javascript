function isHappy(n) {
    let set = new Set();
    while(true){
        let sum  = 0 ;
        while(n>0){
            let digit = n%10
            digit= digit * digit
            sum = sum + digit
            n = Math.floor(n/10)
        }
        if(sum == 1) {
            console.log(true)
            return true;
        }
        if(set.has(sum)){
            console.log(false)
            return false;
        } 
        set.add(sum) 
        n = sum
    }
}
isHappy(52)
