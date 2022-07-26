class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

let a = new Node(2);
let b = new Node(4);
let c = new Node(3);

// linking
a.next = b;
b.next = c;


let x = new Node(5);
let y = new Node(6);
let z = new Node(4);

// linking
x.next = y;
y.next = z;

const addLinkedList = (list1, list2)=> {
  let carry = 0;
  let ans = new Node(0);
  let cur = ans;
  let a = list1;
  let b = list2;
  while (a !== null || b !== null) {
    let x = (a!==null) ? a.data : 0;
    let y = (b!==null) ? b.data : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    console.log('sum (x + y) ', x, ' + ', y, ' = ',sum, ' --> ', carry);
    cur.next = new Node(sum % 10);
    cur = cur.next;
    if (a !== null)
      a = a.next;
    if (b !== null)
      b = b.next;
  }
  if (carry) {
    cur.next = new Node(carry);
  }
  return ans.next;
}
const sum = addLinkedList(a, x);
console.log('Linked list a ', JSON.stringify(a));
console.log('Linked list x ', JSON.stringify(x));
console.log('Sum of two linked list is ', JSON.stringify(sum));
