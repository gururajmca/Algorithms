
const grid = [
  ['W','L','W','W','W'],
  ['W','L','W','W','W'],
  ['W','W','W','L','W'],
  ['W','W','L','L','W'],
  ['L','W','W','L','L'],
  ['L','L','W','W','W']
]

// Travese every r,c if L apply the DFS and explore all the connected nodes. onece we done with that island move the next grid position.

// (3, 4)
// (r, c)
// (r - 1, c) // 2,4

const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();
  for (let r=0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
}


// Exploring the r,c for every node
const explore = (graph, r, c, visited) => {
  // Since we are traversing all 4 directions of the current node we need to add the row and col inbound checks
  const rowInbound = 0 <= r && r < grid.length;
  const colInbound = 0 <= c && c < grid[0].length;
  if (!rowInbound || !colInbound) return false;

  // Skip the Water node
  if (grid[r][c] === 'W') return false;

  // build the pos string which we wanted to store in thr set
  let pos = r + ',' + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  // Explore the node with all 4 directions
  explore(graph, r - 1, c, visited);
  explore(graph, r + 1, c, visited);
  explore(graph, r, c - 1, visited);
  explore(graph, r, c + 1, visited);

  // finally return the island
  return true;
}

console.log('Number of islands in the given grid ', grid, ' is =', islandCount(grid));
