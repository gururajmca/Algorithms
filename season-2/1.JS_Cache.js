const cacheStore = {};
class Cache {
  Set(key, val) {
    if (!cacheStore[key]) {
        cacheStore[key] = [];
    }
    cacheStore[key].push(val);
  }

  Get(key, version) {
    let len = 0;
    if (version === undefined && cacheStore[key]) {
        len = cacheStore[key].length - 1;
        return cacheStore[key][len];
    } else {
      return 'None'
    }
  }

  Print() {
    console.log(cacheStore);
  }
}

const c1 = new Cache();
c1.Set('apple', 1); // 1
c1.Set('apple', 2); // 2
c1.Set('pear', 10); // 3
c1.Set('pear', 20); // 4
c1.Set('apple', 3); // 5

const ret = c1.Get('apple', 4); // 2
c1.Print();

console.log('The Cache value for the apple is ', ret);
