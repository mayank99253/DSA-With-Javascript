class Solution {
    maxArea(height) {
        let i = 0 , j = height.length - 1
        let length , breath , area  , maxArea = 0
        while(i<j){
            length = Math.min(height[i], height[j]);
            breath = j-i
            area = length * breath
            maxArea = Math.max(maxArea , area);
            if(height[i] < height[j]) i++
            else j--
        }

        return maxArea
    }
}
