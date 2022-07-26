const numOfIslands = (grid) => {

  // base condition grid lenght check
  if (grid.length === 0) {
    return 0;
  }

  let count = 0;

  for(let rowIndex in grid) {
    for(let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === 1) {
        count++;
        teraform(grid, parseInt(rowIndex), parseInt(colIndex));
      }
    }
  }
  return count;
}

const teraform = (grid, rowIndex, colIndex) => {

  // Index out bounce
  if (grid[rowIndex] === undefined || grid[rowIndex][colIndex] === undefined || grid[rowIndex][colIndex] === 0) return;

  grid[rowIndex][colIndex] = 0;

  teraform(grid, rowIndex + 1, colIndex);
  teraform(grid, rowIndex - 1, colIndex);
  teraform(grid, rowIndex, colIndex + 1);
  teraform(grid, rowIndex, colIndex - 1);

  console.log('grid == ', grid);
}


const grid = [
  [1,1,1,0,0],
  [1,0,1,0,0],
  [0,0,0,1,0],
  [0,0,0,0,1],
  [0,0,0,1,1],
];

const numberOfIsLands = numOfIslands(grid);
console.log('Number of IsLand = ', numberOfIsLands);
