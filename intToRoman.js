const intToRoman = (num)=> {
  const mapRoman = [
    ['I', 'V'],
    ['X', 'L'],
    ['C', 'D'],
    ['M']
  ];

  let res = '';
  let i = 0;
  while(num > 0) {
    tmp = num % 10;
    if (num === 9) {
      res = mapRoman[i][0] + mapRoman[i + 1][0] + res;
    } else if (num >=5) {
      res = mapRoman[i][1] + mapRoman[i][0].repeat(tmp - 5) + res;
    } else if (num === 4) {
      res = mapRoman[i][0] + mapRoman[i][1] + res;
    } else {
      res = mapRoman[i][0].repeat(tmp) + res;
    }
    i++;
    console.log('number ', num);
    num = Math.floor(num / 10);
  }
  return res;
}

const n = 56;
console.log('Int to Roman ', intToRoman(n));
