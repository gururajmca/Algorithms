
function houseRobber(nums) {

  // base conditions
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  for (var i = 2; i < nums.length; i++) {
      nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);
  }
  console.log('NUMS Array ', nums);
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
}

// const houses = [1,2,3,1];

const houses = [2,1,2,1,1,2,1,2,1,2];
console.log('Max money for house robber ', houseRobber(houses));
