class Cat {
  name = '';
  get name() {
    return this.name;
  }
  set name(val) {
    this.name = val;
  }
}

const c1 = new Cat();
c1.name = 'Don';
console.log('My cat name is ', c1.name);
