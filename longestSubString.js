const longestSubString = (s)=> {

  var map = {};
  var len = s.length;
  var max = 0;
  var start = 0;
  for (var i = 0; i < len; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }
  console.log(map);
  return max;
}

// abcd

console.log('longestSubString ', longestSubString('abcbd'));
