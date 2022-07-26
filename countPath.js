const countPaths = (grid, r=0, c=0, memo = {})=> {

  let pos = r + "," + c;
  if(pos in memo) return memo[pos];

  // Index bounding check
  if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;

  // Avoid the last row, col
  if (r === grid.length -1 && c === grid[0].length - 1) return 1;

  const downCount = countPaths(grid, r + 1, c, memo);
  const rightCount = countPaths(grid, r, c + 1, memo);

  memo[pos] = downCount + rightCount;
  return memo[pos];
}

const grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
const ans = countPaths(grid); // -> 5

console.log('countPath is ', ans);
