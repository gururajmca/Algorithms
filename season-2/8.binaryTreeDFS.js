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

function DFS(root) {
  const stack = [root];
  while(stack.length > 0) {
    let curNode = stack.pop();
    console.log(curNode.val);
    if (curNode.right)
      stack.push(curNode.right);
    if (curNode.left)
      stack.push(curNode.left);
  }
}
DFS(a);
function DFSRecurssive(root) {
  if (root === null) return [];
  const leftValues = DFSRecurssive(root.left);
  const rightValues = DFSRecurssive(root.right);
  return [root.val, ...leftValues, ...rightValues];
}
const res = DFSRecurssive(a);
console.log('DFSRecurssive = ', res);
