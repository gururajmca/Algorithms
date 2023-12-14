const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];
console.log(edges);
function buildGraph(edges) {
  const graph = {};
  for (var node of edges) {
    const [a, b] = node;
    if(!graph[a]) graph[a] = [];
    if(!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const graph = buildGraph(edges);
console.log(graph);

function findShortestPath(graph, src, dest) {
  const queue = [[src, 0]];
  const visited = new Set();
  while (queue.length > 0) {
      const [node, distance] = queue.shift();
      if (node === dest) return distance;
      for (var neighbore of graph[node]) {
        if(!visited.has(neighbore)) {
          visited.add(neighbore);
          queue.push([neighbore, distance + 1]);
        }
      }
  }
  return -1;
}
console.log(' Shortest path between ', findShortestPath(graph, 'w', 'z'));
