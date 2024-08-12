// Best time to buy the stock with max profit
// [7, 1, 5, 3, 6, 4]
function findMaxProfit(stockPrices) {
    let left = 0;
    let right = 1;
    let len = stockPrices.length;
    let maxProfit = 0;

    while(right < len) {
      // If any profit
      if (stockPrices[left] < stockPrices[right]) {
        let profit = stockPrices[right] - stockPrices[left]
        maxProfit = Math.max(maxProfit, profit);
      } else {
        left = right;
      }
      right = right + 1;
    }
    return maxProfit;
}

const stocks = [7, 2, 1, 5, 3, 6, 2, 13, 9, 7];
const maxProfit = findMaxProfit(stocks);
console.log('Max profile of stocks ', stocks, ' is =', maxProfit);
