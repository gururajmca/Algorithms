let s1 = 'abcdaxbaca';

function findLongestSubstringNonRepeatingChar(str) {
  let maxLen = 0;
  let tmp = {};
  let start = -1;
  for (var i = 0; i < str.length; i++) {
    if(tmp[str[i]] > start) {
      start = tmp[str[i]];
    }
    tmp[str[i]] = i;
    maxLen = Math.max(maxLen, i - start);
  }
  return maxLen;
}

console.log('Non repeating char substring = ', findLongestSubstringNonRepeatingChar(s1));
