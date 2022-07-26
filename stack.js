// write the stack which does push, pop and max of the value in O(1)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.oldMax = null;
  }
}

// Build the LL
function push(node, val) {
  let newNode = new Node(val);
  if (node === null) {
    maxElement = val;
    return newNode;
  } else {
    if (val > maxElement) {
      newNode.oldMax = maxElement;
      maxElement = val;
    }
    newNode.next = node;
    return newNode;
  }
}

function pop(node) {
  if (node !== null) {
    if (node.oldMax) {
      maxElement = node.oldMax;
    }
    return node.next;
  }
}


var maxElement = 0;
let myList = null
let newHead = push(myList, 6);
newHead = push(newHead, 8);
newHead = push(newHead, 2);
newHead = push(newHead, 10);
newHead = push(newHead, 5);
newHead = push(newHead, 11);
newHead = pop(newHead);
newHead = push(newHead, 21);

console.log(JSON.stringify(newHead));
console.log('Max value ', maxElement);
