const romanToInt = (str)=> {

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let res = 0;
  str.split('').forEach((num, i) => {
    if(map[num] < map[str[i + 1]]) {
      res -= map[num];
    } else {
      res += map[num];
    }
  });

  return res;
}

const roman = 'LVII';
console.log('Integer ', roman , ' to Roman =',  romanToInt(roman));
