function maxProfit(stocks) {
  let mim_buying_price = stocks[0];
  let max_profit = 0;
  for (var i = 1; i < stocks.length; i++) {
    // Check for the lower buying price
    if (mim_buying_price > stocks[i]) {
      mim_buying_price = stocks[i];
    } else if(s[i]-mim_buying_price > max_profit) {
      max_profit = (s[i]-mim_buying_price);
    }
  }
  console.log('Minimum buying price ', mim_buying_price);
  console.log('Max profile ', max_profit);
}

const s = [7, 1, 5, 3, 6, 4];

maxProfit(s);
