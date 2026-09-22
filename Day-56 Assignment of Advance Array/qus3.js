function sortArrayByParity(arr) {
    let  ans =[];
    for(let i =0 ; i<arr.length; i++){
        if(arr[i]%2 === 0){
            ans.push(arr[i])
        }
    }
    for(let i =0 ; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            ans.push(arr[i])
        }
    }

    console.log(ans)
}

sortArrayByParity([3,1,2,4]) // expected output = [2,4,3,1]