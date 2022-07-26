// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// Input: "()[]{}"
// Output: true

function validParentheses(str) {
  let bracket = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
  };

  let stack = [];
  for (let char of str) {
      if(bracket[char]) {
        stack.push(bracket[char]);
      } else if (stack.pop() !== char) {
          return false;
      }
  }
  return (!stack.length);
}

const s = "[()](){[]}";

console.log('Check valid validParentheses ', validParentheses(s));
