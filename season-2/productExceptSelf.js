function productExceptSelf(arr) {
  let len = arr.length;
  let output = new Array(len).fill(1);
  console.log(output);
  for (var i=1; i<len; i++) {
    output[i] = output[i-1] * arr[i-1];
  }
  console.log(output);
  let suffixProd = arr[len-1];
  for (var i = len-2; i>=0; i--) {
      console.log('suffixProd, i ', suffixProd, i);
      output[i] *= suffixProd;
      suffixProd *= arr[i];
  }
  console.log(output);
}

const inputArray = [1,2,3,4];
/*
output = [ 1, 1, 1, 1] // first step

Left array = [1, 2, 6, 24]

Right array = [24,24,12,4]

Multifly these array's to get the final array
output = [24,]

//
// out put = [15, 10, 6, 30]
*/
productExceptSelf(inputArray);
