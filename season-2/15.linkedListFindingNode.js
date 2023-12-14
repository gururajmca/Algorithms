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

function findNode(root, target) {
  return isNodePresent(root, target);
}
function isNodePresent(root, target) {
  if (root === null) return false;
  if (root.val === target) return true;
  return isNodePresent(root.next);
}
console.log('Find a node value in Linked list ----');
const res = findNode(a, 2);
console.log(res);
