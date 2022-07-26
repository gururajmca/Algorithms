const grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];

console.log('Grid ', grid);
var numEnclaves = function(grid) {

    let row = grid.length;
    let col = grid[0].length;

    let count = 0;

    for (var i = 0; i < row; i++) {
      // left and right
      if (grid[i][0] === 1)
        dfs(grid, i, 0);
      if (grid[i][col-1] === 1)
        dfs(grid, i, col-1);
    }

    for (var j = 0; j < col; j++) {
        // top and borrom boundaries
        if (grid[0][j] === 1)
            dfs(grid, 0, j);
        if (grid[j][row-1] === 1)
            dfs(grid, j, row-1);
    }

    for (var i = 0; i < row; i++) {
      for(var j = 0; j< col; j++) {
          if (grid[i][j] === 1) {
              count++;
          }
      }
    }

    return count;
};

let dfs = function(grid, i, j){
  let row = grid.length;
  let col = grid[0].length;
  if (i<0 || i>=row || j<0 || j>=col || grid[i][j] === 0) return;

  grid[i][j] = 0;

  // Call the dfs for all the 4 directions
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}

console.log('The number of enclaves ', numEnclaves(grid));
