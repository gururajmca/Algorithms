const array = [1, 5, 4, 3];

function maxArea(arr) {

  let left = 0;
  let right = arr.length - 1;

  let maxArea = 0;
  while (left < right) {
    maxArea = Math.max(maxArea, Math.min(arr[left], arr[right]) * (right - left));
    if (arr[left] < arr[right])
      left ++;
    else
      right --;
  }
  return maxArea;
}

console.log('Max area of the water in the given container is ', maxArea(array));
