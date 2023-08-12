let grid = [
  [' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

for (let col = 0; col < grid[0].length; col++) {
  let column = [];
  for (let row = 0; row < grid.length; row++) {
    column.push(grid[row][col]);
  }
  console.log(column);
}
