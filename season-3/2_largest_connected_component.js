function findLargestConnectedComponentsInGraph(graph) {
  let size = 0;
  let visited = new Set();
  for (var node in graph) {
    size = Math.max(explore(graph, node, visited), size);
  }
  return size;
}

function explore(graph, current, visited) {

  if (visited.has(String(current))) return 0;
  visited.add(String(current));
  let size = 1;
  for (var neigbhore of graph[current]) {
    size += explore(graph, neigbhore, visited);
  }
  return size;
}

const graph = {
  0: [8,1,5],
  1: [0],
  5: [0,8],
  8: [0,5],
  2: [3,4],
  3: [2,4],
  4: [3,2,6],
  6: [4,7],
  7: [6]
};

console.log('The largest connected graph components is ', findLargestConnectedComponentsInGraph(graph));
