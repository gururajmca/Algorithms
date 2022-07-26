const binaryToDecimal = (str)=> {
  let base = 1;
  let decimal = 0;
  for(let i=str.length-1; i>=0; i--) {
    console.log(str[i]);
    if (str[i] === '1') {
      decimal += str[i] * base;
    }
    base *=2;
  }

  return decimal;
}

console.log('Convert binary to decimal =', binaryToDecimal('1001'));
