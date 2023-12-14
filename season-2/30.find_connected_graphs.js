function buildGraph(edges) {
  const graph = {};
  for (var node of edges) {
    const [a, b] = node;
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

function explore(graph, current, visited) {
  if (visited.has(current)) return false;

  visited.add(current);
  for (var neighbore of graph[current]) {
    explore(graph, neighbore, visited);
  }
  return true;
}

const covertedGraph = buildGraph(edges);
let count = 0;
const visited = new Set();
for (var neighbore in covertedGraph) {
  if(explore(covertedGraph, neighbore, visited) === true) {
    count++;
  }
}
console.log('Number of connected graphs = ', count);
