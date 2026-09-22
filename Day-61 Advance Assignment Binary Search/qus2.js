/**
 * @param {number[]} piles - Array of banana piles
 * @param {number} h - Total hours available
 * @return {number} - Minimum eating speed k
 */
function minEatingSpeed(piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        let totalHours = 0;
        for (let i = 0; i < piles.length; i++) {
            totalHours += Math.ceil(piles[i] / mid);
        }
        if (totalHours <= h) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // Output: 4