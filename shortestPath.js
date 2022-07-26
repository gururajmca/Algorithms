const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

const buildGraph = (edges)=> {
  const graph = {};
  for (var node of edges) {
    const [a, b] = node;
    if (!(a in graph))
      graph[a] = [];
    if (!(b in graph))
      graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const shortestPath = (edges, src, dst) => {
  const graph = buildGraph(edges);
  console.log('Graph =', buildGraph(edges));
  const visited = new Set();
  const queue = [[src, 0]];
  while(queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === dst) return distance;
    for (var neighbore of graph[node]) {
      queue.push([neighbore, distance + 1]);
    }
  }
}

console.log('The shortestPath = ', shortestPath(edges, 'w', 'y'));
