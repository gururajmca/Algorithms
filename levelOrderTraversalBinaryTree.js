class BinaryTree {
  constructor(val) {
    this.data = val;
    this.left = this.right = null;
  }
}

let a = new BinaryTree(5);
let b = new BinaryTree(1);
let c = new BinaryTree(7);
let d = new BinaryTree(2);
let e = new BinaryTree(4);
let f = new BinaryTree(3);
let g = new BinaryTree(6);

// Link the tree
a.left = b;
a.right = c;

b.left = d;
b.right = e;

e.left = f;
e.right = g;

// const binaryTree = [3,9,20,null,null,15,7];

// Solution - 1 O(n^2)
function levelOrder(tree) {
  const heightOfTree = treeHeight(tree);
  console.log('heightOfTree ', heightOfTree);
  for (var i = 0; i < heightOfTree; i++) {
      printTheLevelOrder(tree, i);
  }
}

function treeHeight(root) {
  if (root === null)
    return 0;
  return Math.max(treeHeight(root.left), treeHeight(root.right)) + 1;
}

function printTheLevelOrder(root, level) {
  if (root === null)
    return;
  if (level === 1) {
    console.log(root.data);
  } else if (level > 1) {
    printTheLevelOrder(root.left, level - 1);
    printTheLevelOrder(root.right, level - 1);
  }
}


const res = levelOrder(a);
console.log('Level order traversal of the binary tree ', res);
