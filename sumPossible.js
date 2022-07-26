const sumPossible = (amount, numbers)=> {
  if (amount < 0) return false;

  if (amount ===0 ) return true;

  for (var i = 0; i < numbers.length; i++) {
    if(sumPossible(amount - numbers[i], numbers) === true) {
      return true;
    }
  }
  return false;
}

const amount = 4;
const nums = [1, 2, 3];

console.log('Possible sum for the amount ', amount , ' of =', nums, ' is =', sumPossible(amount, nums))

const amount_2 = 15;
const nums_2 = [4,6,10];

console.log('Possible sum for the amount ', amount_2 , ' of =', nums_2, ' is =', sumPossible(amount_2, nums_2));


const sumPossibleDP = (amount, numbers, memo = {})=> {
  if (amount in memo) return memo[amount];
  if (amount < 0) return false;

  if (amount ===0 ) return true;

  for (var i = 0; i < numbers.length; i++) {
    if(sumPossibleDP(amount - numbers[i], numbers) === true) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
}

const amount_3 = 4;
const nums_3 = [1, 2, 3];
const memo = new Set();
console.log('Possible sum for the amount ', amount_3 , ' of =', nums_3, ' is =', sumPossibleDP(amount_3, nums_3, memo))
