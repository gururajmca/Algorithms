const inputArray = [5, -4, -2, 6, -1, 2, 3];

const maxSumSubArray = (arr)=> {

  if (arr.length ===0) {
    return 0;
  }

  let maxSum = 0;
  let curSum = 0;
  for (var i = 0; i < arr.length; i++) {
    curSum +=arr[i];
    maxSum = Math.max(curSum, maxSum);
    // Ignore for the calculations
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return maxSum;
}

// Brute force Solution with O(N^2) 
let maxSum = 0;
for (var i = 0; i < inputArray.length; i++) {
  let sum = 0;
  for (var j = i; j < inputArray.length; j++) {
      sum+=inputArray[j];
      maxSum = Math.max(sum, maxSum);
  }
}
console.log('Kaden\'s maxSum for a given array O^2 ', inputArray , ' is =', maxSum);

console.log('Kaden\'s maxSum for a given array ', inputArray , ' is =', maxSumSubArray(inputArray));
