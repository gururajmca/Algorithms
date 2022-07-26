// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums) {

  if (nums.length === 0) return nums[0];

  let maxValue = nums[0];
  let accValue = nums[0];
  for (var i = 0; i < nums.length; i++) {
    let calValue = Math.max(nums[i], accValue + nums[i]);
    if (calValue > maxValue)
      maxValue = calValue
    accValue = calValue;
  }

  return maxValue;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log('largest sub array sum is ', maxSubArray(nums));
