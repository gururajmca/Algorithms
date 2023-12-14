class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

// Create Nodes
const a = new Node(5);
const b = new Node(3);
const c = new Node(4);
const d = new Node(6);
const e = new Node(7);
const f = new Node(8);

// Create tree by linking the nodes
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

console.log('My Binary tree is ', a);

function maxTreePathSum(root) {
  if (root === null) return - Infinity;
  if (root.left === null && root.right === null) return root.val;
  const leftValues = maxTreePathSum(root.left);
  const rightValues = maxTreePathSum(root.right);
  const tempSum = Math.max(leftValues, rightValues);
  return tempSum + root.val;
}
const maxTreeSumVal = maxTreePathSum(a);
console.log('Max tree sum path =', maxTreeSumVal);
