// def are_identical(root1, root2):
//   if root1 == None and root2 == None:
//     return True
//
//   if root1 != None and root2 != None:
//     return (root1.data == root2.data and
//               are_identical(root1.left, root2.left) and
//               are_identical(root1.right, root2.right))
//
//   return False


const binaryTree = {
  1: [2,3],
  2: [4,5],
  3: [6,7],
  4: [],
  5: [],
  6: [],
  7: []
};

const binaryTree_Two = {
  1: [2,3],
  2: [4,5],
  3: [6,7],
  4: [],
  5: [],
  6: [],
  7: []
};

const depthFirstSearch = (graph, source) => {
  console.log(source);
  for (var neighbore of graph[source]) {
    depthFirstSearch(graph, neighbore);
  }
}

depthFirstSearch(binaryTree, '1');

const
