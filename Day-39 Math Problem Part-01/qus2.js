
function gcd(a, b) {
    return num(a, b)
    function num (a, b){
        if(a==b) return a
        if(a > b) return num(a-b , b);
        return num(a, b-a)
    }
}