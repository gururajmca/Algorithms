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

console.log('My Binary tree is A ', a);

// Create Nodes
const p = new Node(10);
const q = new Node(3);
const r = new Node(4);
const s = new Node(6);
const t = new Node(9);
const u = new Node(12);

// Create tree by linking the nodes
p.left = r;
p.right = q;

r.left = u;
q.right = s;

q.left = t;
console.log('My Binary tree is B ', p);


function is_tree_symetric(root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (root1.val !== root2.val) return false;
  return is_tree_symetric(root1.left, root2.right) && is_tree_symetric(root1.right, root2.left);
}

console.log('Two trees are symetric ', is_tree_symetric(a, p));
