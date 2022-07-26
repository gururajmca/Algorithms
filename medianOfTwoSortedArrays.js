// Median of two sorted arrays
// Example 1
 const nums1 = [1, 3]
 const nums2 = [2, 4, 5]

// 1,2,3,5
// The median is 2.0

// Example 2
// const nums1 = [1, 2]
// const nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5

const medianOfTwoSortedArrays = (num1, num2)=> {
  // Make sure we always assum num1 as small
  if (num1.length > num2.length) {
    return medianOfTwoSortedArrays(num2, num1);
  }

  const x = num1.length - 1;
  const y = num2.length - 1;
  let low = 0;
  let high = x;
  while(low <= high) {
    let partitionX = parseInt((low + high) / 2);
    let partitionY = parseInt((x + y + 1) / 2) - partitionX;

    let maxLeftX = (partitionX === 0) ? -1 : num1[partitionX - 1];
    let minRightX = (partitionX === x) ? 1000 : num1[partitionX];

    let maxLeftY = (partitionY === 0) ? -1 : num2[partitionY - 1];
    let minRightY = (partitionY === y) ? 1000 : num2[partitionY];
    console.log(maxLeftX, minRightX, maxLeftY, minRightY);
    // FOUND
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
          return Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY) / 2;
      } else {
          return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
}

console.log('medianOfTwoSortedArrays ', medianOfTwoSortedArrays(nums1, nums2));
