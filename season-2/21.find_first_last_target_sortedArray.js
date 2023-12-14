console.log('Find first and last element of the sorted array ');
const arr = [2,3,4,4,4,4,4,4,4,5,6,7,8,10];
const target = 4;
const res = [2,8];

function find_fist_last_target_array(arr, target) {
  if (arr[0] > target || arr[arr.length-1] < target || arr.length == 0) {
    console('Ougt')
    return [-1, -1];
  }
  const start = find_first_target(arr, target);
  const end = find_last_target(arr, target);

  return [start, end];
}

function find_first_target(arr, target) {
  if (arr[0] === target) return 0;
  let left = 0;
  let right= arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target && arr[mid-1] < target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function find_last_target(arr, target) {
  if (arr[arr.length-1] === target) return arr.length-1;
  let left = 0;
  let right= arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target && arr[mid+1] > target) return mid;
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const result = find_fist_last_target_array(arr, target);
console.log('Fist and last occurance of the element in the sorted array ', result);
