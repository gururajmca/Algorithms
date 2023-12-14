// Given set of edges find the path exist between src and destination.
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
const buildGraph = (edges) => {
  const graph = {};
  for (var i = 0; i < edges.length; i++) {
      const [a, b] = edges[i];
      if(!(a in graph)) graph[a] = [];
      if(!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
  }
  return graph;
}
const undirectedGraph = buildGraph(edges);
console.log('-------------', undirectedGraph)



const hasPath = (graph, src, dest, visited)=> {
  if (src === dest) return true;

  if (visited.has(src)) return false;

  visited.add(src);
  for (var neighbore of graph[src]) {
    if (hasPath(graph, neighbore, dest, visited) === true) {
      return true;
    }
  }
  return false;
}
const visited = new Set();
console.log('Has path between node i, l exist ? ', hasPath(undirectedGraph, 'i', 'l', visited) )
console.log('Has path between node i, o exist ? ', hasPath(undirectedGraph, 'i', 'o', visited) )
