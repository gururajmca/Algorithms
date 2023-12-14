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

function reverseLinkedList(root) {
  if (root === null) return null;
  let curNode = root;
  let preNode = null;
  while (curNode !== null) {
      const next = curNode.next;
      curNode.next = preNode;
      preNode = curNode;
      curNode = next;
  }
  return preNode;
}

console.log('Linked list Original ---->', JSON.stringify(a));
const res = reverseLinkedList(a);
console.log('Reversed Linked list ---->', JSON.stringify(res));
