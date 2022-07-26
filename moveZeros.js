let moveZerosToLeft = function(A) {
  if (A.length < 1) {
    return;
  }

  let lengthA = A.length;
  let writeIndex = lengthA - 1;
  let readIndex = lengthA - 1;

  while (readIndex >= 0) {
    if (A[readIndex] != 0) {
      A[writeIndex] = A[readIndex];
      writeIndex--;
    }
    readIndex--;
  }
  console.log(A, writeIndex);
  while (writeIndex >= 0) {
    A[writeIndex] = 0;
    writeIndex--;
  }
};

let v = [9,0,1,0,2];
console.log("Original Array: [" + v + "]");

moveZerosToLeft(v);

console.log("After Moving Zeros: [" + v+ "]");
