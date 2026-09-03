// helper.js


    function sortHalves(arr) {
        let arr1 = [...arr];
        let mid = Math.trunc((arr.length) / 2);
        let result = [];
        let temp;

        for (let i = 0; i < mid; i++) {
            for(let j = 0 ; j < mid - 1 ; j++){
                if(arr1[j] > arr1[j+1]){
                    temp = arr1[j+1];
                    arr1[j+1] = arr1[j];
                    arr1[j] = temp;
                }
            }
        }
        for ( i = mid; i < arr.length; i++) {
            for( j = i + 1 ; j < arr.length ; j++){
                if(arr1[i] < arr1[j]){
                    temp = arr1[j];
                    arr1[j] = arr1[i];
                    arr1[i] = temp;
                }
            }
        }

        result = [...arr1]
        return result
    }

sortHalves([1, 3,9,7,6,14,2,5])

