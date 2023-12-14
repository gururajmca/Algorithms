console.log('Check the given parenthesis are valid ');

function is_parenthesis_valid(parenthesis) {
  if (parenthesis.length === 0) {
    return false;
  }
  const stack = [];
  for (var i = 0; i < parenthesis.length; i++) {
    if (parenthesis[i] === '(') {
      stack.push(parenthesis[i]);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

const str = '()(())())';
console.log('My parenthesis %s', str, ' is valid =', is_parenthesis_valid(str));
