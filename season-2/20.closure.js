var count = 0;

function A() {
  count++;
}

function B() {
  count++;
}

function C() {
  count++;
}


function counterIncrement() {
  let countval = 0;
  return {
    getCounter() {
      return countval;
    },
    incrementCounter() {
      countval++;
    }
  }
}

A();
B();
C();
console.log('value of the count ', count);
const p1 = counterIncrement();
p1.incrementCounter();
p1.incrementCounter();
const p2 = counterIncrement();
p2.incrementCounter();
const p3 = counterIncrement();
p3.incrementCounter();

console.log('Count B ', p1.getCounter(), p2.getCounter());

function init() {
  var name ="Guru";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

if (Math.random() > 0.5) {
  let x = 1;
} else {
  let x = 2;
}
console.log(x); // ReferenceError: x is not defined
