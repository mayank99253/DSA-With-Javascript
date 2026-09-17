/**
 * Calculate how much rain water can be trapped.
 * @param {number[]} height - Elevation map
 * @return {number}
 */
function trap(height) {
    let leftMax = 0 , rightMax = 0 , total = 0
    let left = height[0] , right = height[height.length - 1]

    while(left <right){
        leftMax = Math.max(left , height[left])
        rightMax = Math.max(right , height[right])

        if(leftMax < rightMax ){
            total += leftMax - height[left]
        }else{   
            total += rightMax - height[right]
        }
    }

    return total
    
}