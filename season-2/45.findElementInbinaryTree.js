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

function findElementInBinaryTree(root, elem) {
  // base condition
  if (root === null) {
    return false;
  } else {
    if (root.val === elem){
      return true;
    } else {
      const temp = findElementInBinaryTree(root.right, elem);
      if (temp) {
        return temp;
      } else {
        return findElementInBinaryTree(root.left, elem);
      }
    }
  }
  return false;
}

console.log('Find element in binary tree ', findElementInBinaryTree(a, 30));
