
const graph = {
  0: ['1', '8', '5'],
  1: ['0'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['2', '3'],
  5: ['0', '8'],
  8: ['0', '5'],
  9: ['10'],
  10: ['9']
};

const connectedComponentCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (exploreNode(graph, node, visited) === true) {
      count = count + 1;
    }
  }
  return count;
}

const exploreNode = (graph, cur, visited)=> {
  if (visited.has(String(cur))) return false;

  visited.add(String(cur));

  for (let neighbore of graph[cur]) {
    exploreNode(graph, neighbore, visited);
  }

  return true;
}

console.log('The connected components in this graph ', graph , ' is =', connectedComponentCount(graph));
