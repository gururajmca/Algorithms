// Input: s = "anagram", t = "nagaram"
// Output: true

function validAnagram(s, t) {
  let sFrequencyMap = {};
  let tFrequencyMap = {};
  if(s.length !== t.length) return false;

  for (var i = 0; i < s.length; i++) {
    if (!sFrequencyMap[s[i]]) {
      sFrequencyMap[s[i]] = 1;
    } else {
      sFrequencyMap[s[i]] += 1;
    }

    if (!tFrequencyMap[t[i]]) {
      tFrequencyMap[t[i]] = 1;
    } else {
      tFrequencyMap[t[i]] += 1;
    }
  }

  for (var key in sFrequencyMap) {
    if (sFrequencyMap[key] !== tFrequencyMap[key]) {
      return false;
    }
  }
  return true;
}

const s = "anagram", t = "nagarak";
console.log(' Two strings are anagram ', validAnagram(s, t));
