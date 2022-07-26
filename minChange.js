const minChange = (amount, coins)=> {
  const ans = _minChange(amount, coins);
  if (ans === Infinity) {
    return -1;
  } else {
    return ans;
  }
}

const _minChange = (amount, coins, memo = {})=> {
  // Base condition
  if (amount in memo) return memo[amount];

  if (amount < 0) return Infinity;

  if (amount === 0) return 0;

  let minCoins = Infinity;

  for(let coin of coins) {
    const numCoins = 1 + _minChange(amount - coin, coins, memo);
    minCoins = Math.min(minCoins, numCoins);
  }
  memo[amount] = minCoins;
  return minCoins;
}

const amt = 5;
const coins = [1, 3, 4, 5];

console.log('Min change for the amt ', amt, ' is ', minChange(amt, coins));
