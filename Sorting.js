function BubbleSort() {
    let arr = [10, 30, 50, 20, 60, 40, 90, 80, 70, 100]
    // Bubble Sort 
    let n = arr.length
    let temp;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp
            }
        }
    }
    console.log(arr);
}

function SelectionSort() {
    let arr = [6, 4, 8, 5, 2, 1, 9, 7, 3];
    let n = arr.length;
    let temp;
    for (let i = 0; i < n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n ; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }

        }
        if (min != i) {
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    console.log(arr)

}

function InsertionSort() {
    let arr = [2,3,4,9,1,5,6,8,7];
    let n = arr.length;

    for(let i = 1 ; i<n ; i++){
        let key = arr[i];
        let j = i-1 ;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[i];
            j--;
        }
        arr[j+1]= key
    }
    console.log(arr);
}
InsertionSort()