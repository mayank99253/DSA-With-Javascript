function sort(s) {
    let sArr = s.split(" ")

    for(let i =0 ; i<sArr.length ; i++){
        for(let j =0 ; j < sArr.length - i -1 ; j++){
            if(sArr[j] > sArr[j+1]){
                temp = sArr[j];
                sArr[j] = sArr[j+1];
                sArr[j+1] = temp
            }
        }
    }
    
    return sArr.join(" ")
}
sort("taj mahal is situated at Agra")