const grid = [
  ['W','L','W','W','L'],
  ['W','L','W','W','W'],
  ['W','W','W','L','W'],
  ['W','W','L','L','W'],
  ['L','W','W','L','L'],
  ['L','L','W','W','W']
]


const minIslandCount = (grid)=> {
  let minSize = Infinity;
  const visited = new Set();
  for (var r = 0; r < grid.length; r++) {
      for (var c = 0; c < grid[0].length; c++) {
          const size = exploreSize(grid, r, c, visited);
          if (size > 0 && size < minSize) {
            minSize = size;
          }
      }
  }

  return minSize;
}

const exploreSize = (grid, r, c, visited)=> {
  // Inbound checks
  const rowInbound = 0 <= r && r < grid.length;
  const colInbound = 0 <= c && c < grid[0].length;
  if (!rowInbound || !colInbound) return 0;

  if (grid[r][c] === 'W') return 0;

  let pos = r + ',' + c;
  if (visited.has(pos)) return 0;

  visited.add(pos);

  let size = 1; // Default size of the island

  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);

  return size;
}

console.log('Minimum Number of islands in the given grid ', grid, ' is =', minIslandCount(grid));
