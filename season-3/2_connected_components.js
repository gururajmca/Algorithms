function findConnectedComponentsInGraph(graph) {
  let count = 0;
  let visited = new Set();
  for (var node in graph) {
    if(explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
}

function explore(graph, current, visited) {

  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (var neigbhore of graph[current]) {
    explore(graph, neigbhore, visited);
  }
  return true;
}

const graph = {
  0: [8,1,5],
  1: [0],
  5: [0,8],
  8: [0,5],
  2: [3,4],
  3: [2,4],
  4: [3,2]
};

console.log('The connected graph components are ', findConnectedComponentsInGraph(graph));
