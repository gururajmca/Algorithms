function maxProfit(stocks) {

  let buy = stocks[0];
  stocks[0] = 0;
  let profit = 0;

  for (var i = 1; i < stocks.length; i++) {
      if (buy > stocks[i]) {
        buy = stocks[i];
        stocks[i] = 0;
      } else {
        profit = Math.max(profit, stocks[i] - buy);
      }
  }

  return profit;
}

const prices = [7,1,5,3,6,4];
// const prices = [7,6,4,3,2,1];
console.log('Max profile for the trade ', maxProfit(prices));
