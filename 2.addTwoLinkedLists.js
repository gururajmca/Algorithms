// Create node
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Create LL
let a = new Node(2);
let b = new Node(4);
let c = new Node(3);


// Connect
a.next = b;
b.next = c;

console.log(a);

let x = new Node(5);
let y = new Node(6);
let z = new Node(4);

// Connnect
x.next = y;
y.next = z;

console.log(x);

function addTwoLinkedLists(l1, l2) {
  let head = new Node(0);
  let t1 = l1;
  let t2 = l2;
  let cur = head;
  let carry = 0;
  while(t1 !==null || t2 !== null ) {
    let n1 = (t1) ? t1.data : 0;
    let n2 = (t2) ? t2.data : 0;
    let sum = carry + n1 + n2;
    console.log(n1, ' + ', n2, ' = ', sum);
    cur.next = new Node(sum % 10);
    carry = Math.floor(sum / 10);
    t1 = (t1) ? t1.next : null;
    t2 = (t2) ? t2.next : null;
    cur = cur.next;
  }
  if (carry) {
    cur.next = new Node(carry);
  }
  return head.next;
}

let listSum = addTwoLinkedLists(a, x);
console.log(listSum);
