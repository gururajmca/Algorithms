class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

// Create Nodes
const a = new Node(10);
const b = new Node(3);
const c = new Node(4);
const d = new Node(6);
const e = new Node(9);
const f = new Node(12);

// Create tree by linking the nodes
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

console.log('My Binary tree is ', a);

function TreeMin(root) {
  const queue = [root];
  let minVal = + Infinity;
  while(queue.length > 0) {
    let curNode = queue.shift();
    minVal = Math.min(minVal, curNode.val);
    if (curNode.left)
      queue.push(curNode.left);
    if (curNode.right)
      queue.push(curNode.right);
  }
  return minVal;
}
const minTreeNodeVal = TreeMin(a);
console.log('Minimum value of the treee is ', minTreeNodeVal);
