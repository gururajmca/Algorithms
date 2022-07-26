const productOfArrayExceptSelf = (nums)=> {
  const solution = [];
  const rightProduct = [];
  const leftProduct = [];
  for (var i = 0; i < nums.length; i++) {
    if (leftProduct.length ===0) {
      leftProduct.push(1);
    } else {
      leftProduct.push(leftProduct[i-1] * nums[i-1]);
    }
  }

  for(let i = nums.length - 1; i>-1 ; i--) {
    if(rightProduct.length === 0) {
      rightProduct.push(1)
    } else {
      rightProduct.unshift(rightProduct[0] * nums[i+1])
    }
  }

  for (let i=0; i<nums.length; i++) {
    solution.push(leftProduct[i] * rightProduct[i]);
  }

  return solution;
}

const input = [1,2,3,4];

console.log('productOfArrayExceptSelf ', productOfArrayExceptSelf(input));
