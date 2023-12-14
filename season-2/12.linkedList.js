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

function readLinked(root) {
  let curNode = root;
  while(curNode !== null) {
    console.log(curNode.val);
    curNode = curNode.next;
  }
}
function readLinkedRecurssively(root) {
  if (root === null) return;
  console.log(root.val);
  readLinkedRecurssively(root.next);
}

readLinked(a);
console.log('Traversing the linked list recursively');
readLinkedRecurssively(a);
