
const graph = {
  0: ['1', '8', '5'],
  1: ['0'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['2', '3'],
  5: ['0', '8'],
  8: ['0', '5']
};

const largestConnectedComponent = (graph) => {
  const visited = new Set();
  let largest = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > largest)
      largest = size;
  }
  return largest;
}

const exploreSize = (graph, cur, visited) => {
  if (visited.has(String(cur))) return 0;
  visited.add(String(cur));
  let size = 1;
  for (let neighbore of graph[cur]) {
    size = size + exploreSize(graph, neighbore, visited);
  }
  return size;
}

console.log('Larget component of the graph ', graph, ' is =', largestConnectedComponent(graph));
