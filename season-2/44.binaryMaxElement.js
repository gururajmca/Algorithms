class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

// Create Nodes
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(48);
const e = new Node(5);
const f = new Node(6);

// link
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

console.log('Binary tree ', JSON.stringify(a));

function findMaxElement(root) {
  if (root == null)
    return 0;
  else {
    const rootElem = root.val;
    const leftElem = findMaxElement(root.left);
    const rightElem = findMaxElement(root.right);
    return Math.max(rootElem, leftElem, rightElem);
  }
}

console.log('Max element in Binary tree is ', findMaxElement(a));
