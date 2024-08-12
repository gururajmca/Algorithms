let nums = [2,5,7], target = 9;
// optimized solution
function twoSumArray(nums, target) {
  const map = {};
  for(var i=0; i<nums.length; i++) {
      let compliment = target - nums[i];
      if (map.hasOwnProperty(compliment)) {
          return [map[compliment], i];
      }
      map[nums[i]] = i;
  }
  return [];
}
let res2 = twoSumArray(nums, target);
console.log(nums, 'twoSumArray ', res2);
