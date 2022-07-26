const fib = (num)=> {
  // Base cases
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

console.log('The Fibonnacci number of 6 is ', fib(6));
