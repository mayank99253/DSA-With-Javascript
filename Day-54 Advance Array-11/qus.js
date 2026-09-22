function threeSum(arr) {
         let j, k, ans=[], sum;

        arr.sort((a, b) => a - b);

        for (let i = 0; i < arr.length - 2; i++) {

            if (i != 0 && arr[i - 1] === arr[i]) {
                continue;
            }

            j = i + 1;
            k = arr.length - 1;

            while (j < k) {

                sum = arr[i] + arr[j] + arr[k];

                if (sum === 0) {
                    ans.push([arr[i], arr[j], arr[k]]);

                    j++;
                    k--;

                    while (j < k && arr[j - 1] === arr[j]) j++;
                    while (j < k && arr[k + 1] === arr[k]) k--;

                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return ans;
    }