function editDistance(word1, word2) {
  // Fille the array
  const cache = Array(word1.length + 1).fill(0).map(() => Array(word2.length + 1).fill(0));

  // Fil the last column
  for(let i = 0; i < word1.length + 1; i++) {
    cache[0][i] = i;
  }

  for(let i = 0; i < word2.length + 1; i++) {
    cache[i][0] = i;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i] === word2[j]) {
          cache[i][j] = cache[i-1][j-1];
      } else {
          cache[i][j] = Math.min(cache[i-1][j-1], cache[i-1][j], cache[i][j-1]) + 1;
      }
    }
  }
  return cache[word1.length][word2.length];
}

const w1 = 'abcdef';
const w2 = 'azced';

const minEditOps = editDistance(w1, w2);
console.log('Minimum edit operations needed to convert string ',w1, ' to w2 is ',  minEditOps);
