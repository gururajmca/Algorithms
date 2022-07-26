// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
//
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

const zigzagString = (s, numRows)=> {
  // Base condition
  if (s.length < numRows || numRows < 2) return s;

  const len = s.length;
  let res = "";

  for (var row = 0; row < numRows; row++) {
    let increment = 2 * (numRows - 1);
    for (let i = row; i < s.length; i = i + increment) {
        res += s[i];
        let indexBound = i + increment - 2 * row;
        if (row > 0 && row < numRows - 1 && indexBound < s.length) {
          res += s[indexBound];
        }
    }

  }

  return res;
}

const result = zigzagString('PAYPALISHIRING', 3);
console.log('PAYPALISHIRING = ', result);
