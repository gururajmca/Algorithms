// find the length of the longest non repeating sub-string
// "aabbcc"
// Ans : 1
// "abcabdcc"
// Ans : 4


function maxLengthOfNonRepeatingSubstring(s) {
  var map = {};
  var len = s.length;
  var max = 0;
  var start = 0;
  for (var i = 0; i < len; i++) {
    console.log('value of map ', map);
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
}

const s1 = "abcabdcc";
console.log('The logest sub-string of the string ', s1, ' is ', maxLengthOfNonRepeatingSubstring(s1));
