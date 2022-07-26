const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m','k'],
  ['k', 'l'],
  ['o','n']
];

const buildGraph = (edges)=> {
  const graph = {};
  for (var edge of edges) {
    const [a, b] = edge;
    if (!(a in graph))
      graph[a] = [];
    if (!(b in graph))
      graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const undirectedPath = (edges, src, dst)=> {
  const graph = buildGraph(edges);
  console.log('Converted Graph ', graph);
  return hasPath(graph, src, dst, new Set());
}


const hasPath = (graph, src, dst, visited)=> {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (let neighbore of graph[src]) {
    if (hasPath(graph, neighbore, dst, visited) === true) {
      return true;
    }
  }
  return false;
}

console.log('Undirected Graph finding a hasPath from i to l = ', undirectedPath(edges, 'i','l'));
