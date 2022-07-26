// input = [a, b, ab, abc]

function longestChainOfString(str) {

  // Sort the array
  str.sort((a, b) => a.length - b.length);

  // cache with logest posible sub-string
  // {a: 1, b: 1, ba: 2, bca: 3, ..}

  let max = 0;
  let cache = {};
  for (var word of str) {
    let longest = 0;
    for (var i = 0; i < word.length; i++) {
      let subWord = word.slice(0, i) + word.slice(i + 1);
      longest = Math.max(longest, (cache[subWord] || 0) + 1);
    }
    cache[word] = longest;
    max = Math.max(max, longest);
  }
  return max;
}


// const input = ['ab', 'abc','a', 'b', 'abcd']; ans = 4 { a, ab, abc, abcd}
const input = ['bca', 'bda', 'a', 'b', 'ba', 'bdca'];
console.log('Longest chain of sub string ' , longestChainOfString(input));
