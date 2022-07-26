// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]


// O(N) + O(M log M) = O(NM log M)
// O(NM)

function groupAnagrams(strs) {
  let cache = {};
  for (var str of strs) {
    let sortedKey = str.split('').sort().join('');
    if(!cache[sortedKey]) {
      cache[sortedKey]= [str];
    } else {
      cache[sortedKey].push(str);
    }
  }
  return Object.values(cache);
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log('groupAnagrams = ', groupAnagrams(input));
