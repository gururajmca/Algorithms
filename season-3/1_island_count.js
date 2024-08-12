const grid = [
  ['W','L','W','W','L'],
  ['W','L','W','W','W'],
  ['W','W','W','L','W'],
  ['W','W','L','L','W'],
  ['L','W','W','L','L'],
  ['L','L','W','W','W']
];

function findNumberOfIslands(grid) {
  let count = 0;
  const visited = new Set();
  for(var row = 0;  row < grid.length; row++) {
    for (var col = 0; col < grid[0].length; col++) {
        if(exploreGrid(grid, row, col, visited) === true) {
          count++;
        }
    }
  }

  return count;
}

function exploreGrid(grid, row, col, visited) {
  // Inbound cases
  const rowInbound = row >= 0 && row < grid.length;
  const colInbound = col >= 0 && col < grid[0].length;

  if (!rowInbound || !colInbound) return false;

  // exclude the water cases
  console.log(row, ' --- ', col);
  if (grid[row][col] === 'W') return false;

  const pos = row + ',' + col;
  if (visited.has(pos)) {
    return false;
  }
  visited.add(pos);

  // Visit all the 4 directions for the island
  exploreGrid(grid, row - 1, col, visited);
  exploreGrid(grid, row + 1, col, visited);
  exploreGrid(grid, row, col - 1, visited);
  exploreGrid(grid, row, col + 1, visited);
  return true;
}

const numberOfIslands = findNumberOfIslands(grid);
console.log('Number of Islands in the grid ', numberOfIslands);
