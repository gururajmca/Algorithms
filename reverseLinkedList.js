class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);

// Link
a.next = b;
b.next = c;
c.next = d;

console.log('Original linked list ', JSON.stringify(a));

const reverseLinkedList = (head)=> {

  // Base condition
  if (head === null) return null;

  let prev = null;
  let cur = head;

  while(cur != null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

const res = reverseLinkedList(a);

console.log('Reversed linked list ', JSON.stringify(res));
