const myString = "14hel6lo5 gururaj 1";
let previousNum = 0;
let sum = 0;
for (var i = 0; i < myString.length; i++) {
    if (myString[i] === ' ') continue;
    if (!isNaN(Number(myString[i]))) {
      if (previousNum !== 0) {
        previousNum = previousNum + '' + myString[i];
        sum = parseInt(previousNum);
      } else {
        previousNum = myString[i];
        sum = Number(sum) + Number(myString[i]);
      }
    } else {
      previousNum = 0;
    }
}

console.log('The sum of numbers in the given string ', myString, ' is =', sum);
