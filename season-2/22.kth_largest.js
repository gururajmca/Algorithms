function findKthLargestElement(arr, k) {
  const len = arr.length;
  arr.sort((a, b)=> {
    return a - b;
  });
  return arr[len-k];
}

const arr = [4,2,9,7,5,6,7,1,3];
const k = 4;
console.log('Kth Larget element ', findKthLargestElement(arr, k));
