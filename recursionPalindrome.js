
const isPalindrom = (str, l, r)=> {

  if (l>=r) {
    return true;
  }
  if (str[r] !== str[l]){
    return false;
  }
  return isPalindrom(str, l + 1, r - 1);
}

const myString = 'aba';

console.log('Is my string is palindrom ', myString , ' = ', isPalindrom(myString, 0, myString.length - 1));
