class Cat {
  constructor(name) {
    this.name = name;
  }
  printCatName() {
    console.log('My cat name is ', this.name);
  }
}

module.exports = Cat;

function sum(...args) {
  let total = 0;
  for (var variable of args) {
    total+=variable;
  }
  return total;
}

console.log('Sum of 10, 20, 30', sum(10,20,30));
console.log('Sum of 10, 20, 30, 40, 50', sum(10, 20, 30, 40, 50));
