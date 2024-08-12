var isPalindrome = function(x) {
    var s = '' + x;
    var len = s.length - 1;
    for(var i = 0, j=len; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
};

var isPalindrome2 = function(x) {
    if (x < 0) {
      return false;
    }
    let num = x;
    let res = 0;
    while(num !==0) {
      res = (res * 10) + (num % 10);
      num = Math.floor(num/10);
      console.log(num);
    }
    return num === res;
};
let x = 121;
console.log('The number ', x, ' is isPalindrome ? ', isPalindrome(x));

x = 121;
console.log('The number ', x, ' is isPalindrome2 ? ', isPalindrome2(x));
