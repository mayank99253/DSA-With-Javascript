/**
 * Find the maximum profit by buying and selling stock.
 * @param {number[]} prices - The prices on each day
 * @return {number} - The maximum profit
 */
function maxProfit(prices) {
    let maxProfit = 0, min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i]
        maxProfit = Math.max(maxProfit, (prices[i] - min))
    }

    return maxProfit
}
