// Classic binary problem of O(log n) time complexity
function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (arr[mid] === key) {
          return true;
        } else if (arr[mid] < key) { //
          low = mid + 1;
        } else {
          high = mid - 1;
        }
  }
  return false;
}

const inputArray = [1,2,3,4,5,6,7,8];
const key = 1;
const res = binarySearch(inputArray, key);
console.log('Find key ', key, ' in given sorted array = ', res);
