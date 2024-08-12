const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

function buildGraph(edges) {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const graph = buildGraph(edges);
console.log('Graph ', graph);

function findConnectedComponents(graph) {
  let visited = new Set();
  let count = 0;
  for(let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
}

function explore(graph, current, visited) {
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (var neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
}

const connecteComp = findConnectedComponents(graph);
console.log('connecteComp ', connecteComp);
