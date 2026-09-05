// Selection Sort

let arr = [2,24,45,2,5,3,56,7,3] ; //length = 9;
let temp ;
for(let i = 0 ; i < arr.length-1 ; i ++){
    let min = i;
    for(let j = i+1 ; j < arr.length  ; j++){
        if(arr[j]<arr[min]) min = j;
    }
        if(min != i){
            temp = arr[min];
            arr[min] =  arr[i];
            arr[i] = temp; 
        }
}

console.log(arr)