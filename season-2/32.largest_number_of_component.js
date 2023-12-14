const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
};

function findLargestComponent(graph) {
  let largest = 0;
  let visited = new Set();
  for (var node in graph) {
    const size = exploreGraphSize(graph, node, visited);
    if (size > largest) {
        largest = size;
    }
  }
  return largest;
}

function exploreGraphSize(graph, node, visited) {
  if (visited.has(node)) return 0;

  visited.add(node);
  let size = 1;
  for (var neighbore of graph[node]) {
      size += exploreGraphSize(graph, neighbore, visited);
  }
  return size;
}

console.log('Largest Connect Graph is ', findLargestComponent(graph));
