// Search in Rotated Sorted Array


const searchInRotatedSortedArray = (nums, target)=> {
  let right = nums.length - 1;
  let left = 0;
  while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if(nums[mid] === target) {
        return mid;
      }
      // Determin which section of the array is sorted
      if (nums[left] <= nums[mid]) {
        if (nums[left] <= target && target <= nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (nums[mid] <= target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  }
  return -1;
}


const nums = [4,5,6,7,0,1,2];
const target = 2;
console.log('searchInRotatedSortedArray ', searchInRotatedSortedArray(nums, target));
