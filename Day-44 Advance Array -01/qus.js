// JavaScript code here
function mergeArrays(arr1, m, arr2, n) {
    let i = m - 1, j = n-1 , k = arr1.length - 1

    while(i >= 0 && j >= 0 ){
        if(arr1[i]>arr2[j]) arr1[k--] = arr1[i--]
        else arr1[k--] = arr2[j--] 
    }

    while(j>=0){
        arr1[k--] = arr2[j--]
    }
    return arr1
}
