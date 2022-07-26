const cuttingRod = (price, n) => {
  let dp = [];

  for (var i = 1; i <= n; i++) {
      for (var j = 0; j < i; j++) {
          dp[i] = Math.max(dp[i] || 0, (price[j] + dp[i-j-1] || 0));
      }
  }
  return dp[n];
}
const price = [1, 5, 6, 9, 11, 12, 14, 16];
console.log('Cut rod max price ', cuttingRod(price, price.length));
