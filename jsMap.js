let map = new Map();

map.set("1", "one");
map.set(1, "1 number");
map.set("2", "two");
map.set(3, "three");
console.log(map.get(1));
const allKeys = map.keys();
console.log(allKeys);
const allValues = map.values();
console.log(allValues);

const recipeMap = new Map();
recipeMap.set('cucumber', 10);
recipeMap.set('tomoto', 20);
recipeMap.set('onion', 30);

for(let vegitables of recipeMap.keys()) {
  console.log(vegitables);
}

for(let vegiPrice of recipeMap.values()) {
  console.log(vegiPrice);
}

for(let [veg, price] of recipeMap.entries()) {
  console.log(veg, price);
}

recipeMap.forEach((value, key, map) => {
  if (`${key}` === 'onion') {
    map.set(`${key}`, 40);
  }
  // console.log(`${key}`, `${value}`);
});
console.log(recipeMap);


// Set
const fruites = new Set(["mango", "banana", "chicoo", "orange"]);

for(let item of fruites) {
  console.log(item);
}

function unique(arr) {
  let chant = new Set();
  for (var i = 0; i < arr.length; i++) {
      chant.add(arr[i]);
  }
  return chant;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O
