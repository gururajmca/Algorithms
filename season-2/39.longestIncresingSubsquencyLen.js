const arr = [3,4,-1,0,6,2,3];

function longestIncreasingSubsequence(arr) {

  const tmp = new Array(arr.length).fill(1);
  console.log(tmp);
  for (var i = 1;i < arr.length;i++) {
    for(var j = 0; j < i; j++) {
      if(arr[j] < arr[i]) {
        tmp[i] = Math.max(tmp[i], tmp[j] + 1);
      }
    }
  }

  let maxLen = 1;
  tmp.map((item) => {
    if (item > maxLen) {
      maxLen = item;
    }
  });
  console.log('Max Increasing subsequence length is ', maxLen);
}

longestIncreasingSubsequence(arr);
