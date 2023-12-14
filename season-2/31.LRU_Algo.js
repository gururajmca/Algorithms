class LRU {
    constructor(max = 10) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        let item = this.cache.get(key);
        console.log(this.cache);
        console.log('item = ', item);
        if (item) {
            // refresh key
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item || 'No';
    }

    set(key, val) {
        // refresh key
        if (this.cache.has(key)) {
          this.cache.delete(key);
        } else if (this.cache.size == this.max) { // evict oldest
          this.cache.delete(this.first());
        }
        this.cache.set(key, val);
    }

    first() {
        return this.cache.keys().next().value;
    }
}

let cache = new LRU(3);
[1, 2, 3, 4, 5].forEach(v => cache.set(v, 'v:'+v))
console.log('Is 2 is present in cache ', cache.get(2)); // undefined
console.log('Is 3 is present in cache ', cache.get(3)); // v:3
cache.set(6, 'v:6');
console.log('Is 3 is present in cache ', cache.get(4)); // v:3
