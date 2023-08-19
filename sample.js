const ConnectFour = require('./class/connect-four.js');

grid = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', ' ', 'O', ' '],
  [' ', ' ', ' ', ' ', 'O', ' ', ' '],
  [' ', ' ', ' ', 'O', ' ', ' ', ' '],
];
ConnectFour.checkWin(grid);
