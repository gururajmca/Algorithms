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

function getLinkedListSum(root) {
  return linkedListSum(root);
}
function linkedListSum(root) {
  if (root === null) return 0;
  return root.val + linkedListSum(root.next);
}
console.log('Linked list sum ----');
const res = getLinkedListSum(a);
console.log(res);
