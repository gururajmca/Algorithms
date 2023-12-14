class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function getLinkedListValues(root) {
  let values = [];
  linkedListVal(root, values);
  return values;
}
function linkedListVal(root, values) {
  if (root === null) return;
  values.push(root.val);
  linkedListVal(root.next, values);
}
console.log('Traversing the linked list recursively get the values');
const res = getLinkedListValues(a);
console.log(res);
