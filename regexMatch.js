/*

  '.' Matches any single character.
  '*' Matches zero or more of the preceding element.

  Take 2 Dimentional Array[text][pattern]
  1 . If pattern [j] is matching the text[i] OR pattern[j-1] is .

  2 . If pattern [j] is * then
      Check the before value of the j i.e j - 2

  3. false


  T[i][j] | 0   1  2  3  4
  ------------------------------------------------
          |
          |
          |
*/


function regexMatch(text, pattern) {
  let T = new Array(text.length).fill(false).map(() => new Array(pattern.length).fill(false));

  // Set the 0,0 as true
  T[0][0] = true;

  for (var i = 1; i < T[0].length; i++) {
    if (pattern[i - 1] === '*') {
      T[0][i] = T[0][i - 2];
    }
  }

  for (var i = 1; i < T.length; i++) {
    for (var j = 1; j < T[0].length; j++) {
      if (pattern[j - 1] === '.' || pattern[j - 1] === text[i - 1]) {
        T[i][j] = T[i-1][j-1];
      } else if(pattern[j - 1] === '*') {
        T[i][j] = T[i][j-2];
        if (pattern[j-2] === '.' || pattern[j-2] === text[i-1]) {
          T[i][j] = T[i][j] || T[i-1][j];
        }
      } else {
        T[i][j] = false;
      }
    }
  }

  return T[text.length-1][pattern.length-1];
}

// const text = 'mississippi';
// const pattern = 'mis*is*p*.';
const text = "by"
const pattern = "a*b.*y"
console.log('Text and regress match ', regexMatch(text, pattern))
