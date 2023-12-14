class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// create a binary tree
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

// Link
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log('My binary tree is ', JSON.stringify(a));

function DepthFirstSearch(root) {
  if (root === null) {
    return [];
  }
  let stack = [root];
  let res = [];
  while (stack.length > 0) {
    let cur = stack.pop();
    res.push(cur.val);
    if (cur.right)
      stack.push(cur.right);
    if (cur.left)
      stack.push(cur.left);
  }
  console.log(res);
}

function BreadthFirstSearch(root) {
  if (root === null) {
    return [];
  }
  let queue = [root];
  let res = [];
  while (queue.length > 0) {
    let cur = queue.shift();
    res.push(cur.val);
    if (cur.right)
      queue.push(cur.right);
    if (cur.left)
      queue.push(cur.left);
  }
  console.log(res);
}

DepthFirstSearch(a);
BreadthFirstSearch(a);
