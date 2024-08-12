function decode(s) {

  if (s[0] === '0') return 0;
  // Array fill
  let dp = new Array(s.length + 1).fill(0);
  // set some base case.
  dp[0] = 1;
  dp[1] = 1;

  // compute other values for dp
  for (var i = 2; i <= s.length; i++) {
    let single = +s[i-1];
    let double = +(s[i-2] + s[i-1]);
    console.log('single ', single);
    console.log('double ', double);
    if (single >=1 && single<=9) {
      dp[i] += dp[i-1];
    }
    if (double >=10 && double<=26) {
      dp[i] += dp[i-2];
    }
  }
  return dp[s.length];
}

// const s1 = '1212';
// console.log('The number of ways to decode the string ', s1, ' is =', decode(s1));
// const s2 = '226';
// console.log('The number of ways to decode the string ', s2, ' is =', decode(s2));
const s3 = '1106';
console.log('The number of ways to decode the string ', s3, ' is =', decode(s3));
