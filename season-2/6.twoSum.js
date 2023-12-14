let nums = [2,5,7], target = 9;
// optimized solution
function twoSumArray(nums, target) {
  let numberMap = new Map();
  let len = nums.length;
  for (let i = 0; i<len; i++) {
    let complement = target - nums[i];
    if (numberMap.has(complement)) {
      return [numberMap.get(complement), i];
    }
    numberMap.set(nums[i], i);
  }
  return [];
}
let res2 = twoSumArray(nums, target);
console.log(nums, 'twoSumArray ', res2);
