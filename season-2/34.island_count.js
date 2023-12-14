const edges = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'W']
];

const findIslandCount = (edges)=> {
  let count = 0;
  const row = edges.length;
  const col = edges[0].length;
  const visited = new Set();
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (explore(edges, i, j, visited) === true) {
        count++;
      }
    }
  }
  return count;
}

const explore = (edges, r, c, visited) => {

  const rowInBound = (0 <= r && r < edges.length);
  const colInBound = (0 <= c && c < edges[0].length);
  if (!rowInBound || !colInBound) return false;
  if (edges[r][c] === 'W') return false;

  const visitedIndex = r + ',' + c;
  if (visited.has(visitedIndex)) return false;
  visited.add(visitedIndex);

  explore(edges, r - 1 , c, visited);
  explore(edges, r + 1 , c, visited);
  explore(edges, r, c - 1, visited);
  explore(edges, r, c + 1, visited);

  return true;
}

console.log('Number of Islands ' , findIslandCount(edges));
