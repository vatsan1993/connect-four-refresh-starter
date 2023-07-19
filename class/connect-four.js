const Screen = require('./screen');
const Cursor = require('./cursor');

class ConnectFour {
  constructor() {
    this.playerTurn = 'O';

    this.grid = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);

    Screen.addCommand('l', 'Move left', this.left.bind(this));
    Screen.addCommand('r', 'Move right', this.right.bind(this));
    Screen.addCommand('p', 'Place Marker', this.placeMarker.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  right() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.right();
    cursor.setBackgroundColor();
    Screen.render();
  }

  left() {
    let cursor = this.cursor;
    cursor.resetBackgroundColor();
    cursor.left();
    cursor.setBackgroundColor();
    Screen.render();
  }

  placeMarker() {
    let cursor = this.cursor;
    let col = cursor.col;
    let row = 0;
    let value = this.grid[row][col];
    if (value === ' ') {
      while (row < this.grid.length - 1 && value === ' ') {
        row++;
        value = this.grid[row][col];
      }
      if (value !== ' ') {
        row--;
      }
      Screen.setMessage(row);
      this.grid[row][col] = this.playerTurn;
      Screen.setGrid(row, col, this.playerTurn);
      this.playerTurn = this.playerTurn == 'X' ? 'O' : 'X';
      Screen.render();
    } else {
      Screen.setMessage('Unable to place the marker!');
    }
  }

  // Remove this
  static testCommand() {
    console.log('TEST COMMAND');
  }

  static isSame(arr) {
    let val = arr[0];
    for (let value of arr) {
      if (value !== val) {
        return false;
      }
    }
    return true;
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    // horizontal wins

    return false;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = ConnectFour;
