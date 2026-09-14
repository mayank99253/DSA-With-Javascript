function kthDistinct(arr, k) {
    let map = new Map()
    let ans = []
    for(let i=0 ; i <arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i],(map.get(arr[i])+1))
        }else{
            map.set(arr[i] , 1)
        }
    }
    for(let [keys , values] of map){
        if(values === 1){
            ans.push(keys)
        }
    }

    console.log(ans)

    if(ans[k-1]){
        return ans[k-1]
    } 
    return "None"
}

kthDistinct(['a', 'b', 'c', 'd', 'a', 'b', 'e'],2)