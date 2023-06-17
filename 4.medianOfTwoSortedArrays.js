let arr = [10, 20, 30, 40, 50];
let brr = [5,15,25,27,28,55,65,75,85];
// Naive method
// Take temporary array and push all the arr and brr elements
// Sort the temp array.
// if len of temp array is odd then temp[len/2] is median
// else median = (temp[(len/2)-1] + temp[len/2]) / 2


function findMedian(arr, n, brr, m) {
  let begin = 0;
  let end = n;

  console.log('size ', n, m);
  while(begin <= end){
    let i1 = parseInt((begin + end)/2);
    let i2 = parseInt((n+m+1)/2) - i1;

    console.log('i1 and i2 ', i1, i2);
    // find the max1, min1
    let min1 = (i1 == n) ? Number.MAX_SAFE_INTEGER : arr[i1];
    let max1 = (i1 == 0) ? Number.MIN_SAFE_INTEGER : arr[i1-1];

    // find the max2, min2
    let min2 = (i2 == m) ? Number.MAX_SAFE_INTEGER : brr[i2];
    let max2 = (i2 == 0) ? Number.MIN_SAFE_INTEGER : brr[i2-1];

    console.log('max1,min1 and max2, min2 ', max1, min1, max2, min2);
    // Median condition
    if ((max1 <= min2) && (max2 <= min1)) {
      // Check the even odd case
      if((n+m)%2 === 0) {
        return (Math.max(max1, max2) + Math.min(min1, min2)) / 2;
      } else {
        return Math.max(max1, max2);
      }
    }
    // Navigate the pointers left and right
    if (max1 > min2) {
      end = i1 - 1;
    } else {
      begin = i1 + 1;
    }
  }
}

const medianVal = findMedian(arr, arr.length, brr, brr.length);
console.log('Median Val is ', medianVal);
