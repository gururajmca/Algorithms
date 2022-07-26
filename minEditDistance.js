// ans = 1 (delete A) + 1 (delete B) + add A = 3

const minEditDistance = (a, b) => {
  let m = a.length;
  let n = b.length;

  let dp = Array(m+1).fill().map(() => Array(n+1).fill(0));

  for(let i=0; i<=m; i++) dp[0][i] = i;
  for(let j=0; j<=n; j++) dp[j][0] = j;

  console.log('DP ', dp);
  for (var i = 1; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
          if (a[i-1] === b[j-1]) {
            dp[i][j] = dp[i-1][j-1];
          } else {
            dp[i][j] = 1 + Math.min((dp[i][j-1]||0), (dp[i-1][j-1] || 0), (dp[i][j-1] || 0));
          }
      }
  }
  return dp[m][n];
}
const str1 = 'ABCAB';
const str2 = 'EACB'; // EACB
console.log('Min edit for string =', minEditDistance(str1, str2));
