class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

// Create Nodes
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

// Create tree by linking the nodes
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

console.log('My Binary tree ', a);

function BFS(root) {
  const queue = [root];
  while(queue.length > 0) {
    let curNode = queue.shift();
    console.log(curNode.val);
    if (curNode.left)
      queue.push(curNode.left);
    if (curNode.right)
      queue.push(curNode.right);
  }
}
BFS(a);
function BFSRecurssive(root) {
  if (root === null) return [];
  const leftValues = BFSRecurssive(root.left);
  const rightValues = BFSRecurssive(root.right);
  return [root.val, ...leftValues, ...rightValues];
}
const res = BFSRecurssive(a);
console.log('BFSRecurssive = ', res);
