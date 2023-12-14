class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;

function findNodeValue(root, pos) {
  if (root === null) return null;
  if (pos === 0) return root.val;
  return findNodeValue(root.next, pos - 1);
}

console.log('Find a node value at pos ----');
const res = findNodeValue(a, 3);
console.log(res);
