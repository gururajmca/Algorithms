const deleteNodeAtPos = (head, pos)=> {
  if (pos < 0) {
    return null;
  }

  let pre;
  let cur = head;

  // traverse to the position
  let count = 0;
  while (count < pos) {
    pre = cur;
    cur = cur.next;
    count++;
  }
  pre.next = cur.next;
  return head;
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');

// Link the nodes
a.next = b;
b.next = c;
c.next = d;
console.log('Original List ', JSON.stringify(a));
const newHead = deleteNodeAtPos(a, 2);
console.log('After deleting C', JSON.stringify(newHead));
