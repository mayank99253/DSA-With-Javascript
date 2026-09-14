function decodeMessage(mapping, message) {
    let ans = ''
    let map = new Map();
    for (let i = 0; i < mapping.length; i++) {
        map.set(mapping[i][0], mapping[i][1]);
    }

    for(let i = 0 ; i< message.length;i++){
        if(message.charCodeAt(i) === 32) {
            ans = ans + " "
        }
        if(map.get(message.charAt(i))){
            ans = ans + map.get(message.charAt(i))
        }
        console.log(map.get(message.charAt(i) === undefined))
    }

    return ans

}

decodeMessage([['a', 'b'], ['b', 'c'],['c', 'd'], ['d', 'e'], ['e', 'f'] ] , "abc dg")