function arrayMaxSum(array, size) {
  let maxSum = - Infinity;
  let curSum = 0;
  for(let i = 0; i < array.length; i++) {
    curSum += array[i];
    if (i>= (size - 1)) {
      maxSum = Math.max(maxSum, curSum);
      curSum -= array[i - (size - 1)];
    }
  }
  return maxSum;
}
const arr = [1,3,5,8,9,12,7,6,2];
const MaxSumOfArray = arrayMaxSum(arr, 3)
console.log('Max sum of size 3 is ', MaxSumOfArray);
