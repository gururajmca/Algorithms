class BinaryTree {
  constructor(val) {
    this.data = val;
    this.left = this.right = null;
  }
}

let a = new BinaryTree('A');
let b = new BinaryTree('B');
let c = new BinaryTree('C');
let d = new BinaryTree('D');
let e = new BinaryTree('E');
let f = new BinaryTree('F');
let g = new BinaryTree('G');

// Link the tree
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

console.log('Binary tree ', JSON.stringify(a));

const inorderTraversal = (tree) => {
  if (tree === null)
    return;
  inorderTraversal(tree.left);
  console.log(tree.data);
  inorderTraversal(tree.right);
}
console.log('Inorder traverse ');
inorderTraversal(a);

const preorderTraversal = (tree)=> {
  if (tree === null)
    return;
  console.log(tree.data);
  preorderTraversal(tree.left);
  preorderTraversal(tree.right);
}
console.log('Pre order traverse ');
preorderTraversal(a);

const postorderTraversal = (tree)=> {
  if (tree === null)
    return;
  preorderTraversal(tree.left);
  preorderTraversal(tree.right);
  console.log(tree.data);
}
console.log('Post order traverse ');
postorderTraversal(a);
