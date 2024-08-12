// JS Problem 1
// const firstname = fun();
// let name = 'gururaj';
// function fun() {
//   return `my name is ${name}`; // name is not initialised
// }
// console.log(firstname);

// JS Problem 2
function mul(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}
console.log('Result of mul(2)(3)(2) ', mul(2)(3)(2));
console.time('setTimeout function');
for (var i = 0; i < 5; i++) {
  setTimeout(()=> {
    console.log(i);
  }, i * 1000);
}
console.timeEnd('setTimeout function');


console.log("This is the first statement");

setTimeout(function(){
    console.log("This is the second statement");
}, 1000);

console.log("This is the third statement");
