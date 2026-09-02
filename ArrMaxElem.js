let arr = [10, 220, 160, 112, 123, 134, 122, 10];

let max = arr[0];;
let sMax = arr[0];


//  Code For Find the Second Max Number 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i] > sMax && arr[i]!== max) {
        sMax = arr[i]
    }
}

console.log(max, sMax);


//  Code for find the Max number = 1 way to find it

// let num = 0 ;
// for (let i = 0; i < arr.length; i++) {num = Math.max(num , arr[i]);}
// console.log(num)

//  Code for find the Max number = 2 way to find it

// for(let i = 0 ; i< arr.length ; i ++ ){
//     if(num > arr[i]){
//         process.stdout.write("")
//     }else{
//         num = arr[i];
//     }
// }
// console.log(num);




