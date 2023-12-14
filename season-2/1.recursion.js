console.log('try this recursion');

function printMe(n) {

  // condition
  if (n<1)
    return;

  // Do things
  console.log('N value ', n, '\n');
  // Call it again
  printMe(n-1);
}
printMe(5);

// Factorial
// fn = fn * fn-1;
function factorialNum(n) {

  if (n == 0 || n==1) {
    return 1;
  }
  return n * factorialNum(n-1);
}

console.log('Factorial of 5 = ', factorialNum(5));
