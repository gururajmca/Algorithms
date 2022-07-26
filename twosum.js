var twoSum = function(nums, target) {
  const indices = new Map();
  for (let index = 0; index < nums.length; index++) {
      const complement = target - nums[index];
      if (indices.has(complement)) {
          return [indices.get(complement), index]
      }
      indices.set(nums[index], index)
  }
  return [];

};
// Sample results
var nums = [1,10,8,11,18]; // 11,13, 10
var target = 21;
const result = [ 1, 3 ];
console.log("Result == ", result);
