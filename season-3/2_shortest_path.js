// Using the breadth first search.
function findShortestPathInGraph(graph, src, dest) {
  const queue = [[src, 0]];
  const visited = new Set([src]);
  while(queue.length>0) {
    const [current, distance] = queue.shift();
    if (current === dest) {
      return distance;
    }
    for(let neigbhore of graph[current]) {
      if (!visited[neigbhore]) {
        visited.add(neigbhore);
        queue.push([neigbhore, distance + 1]);
      }
    }
  }
  return -1;
}

const graph = {
  2: [3,4],
  3: [2,4],
  4: [3,2,6],
  6: [4,7],
  7: [6]
};

console.log('The largest connected graph components is ', findShortestPathInGraph(graph, 2, 7));
