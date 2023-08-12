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
      if (value === ' ' || value !== val) {
        return false;
      }
    }
    return val;
  }

  static allEmpty(grid) {
    let empty = true;
    for (let row of grid) {
      for (let val of row) {
        if (val !== ' ') {
          empty = false;
          break;
        }
      }
      if (!empty) break;
    }
    return empty;
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    // if grid is empty
    if (ConnectFour.allEmpty(grid)) {
      return false;
    }

    // horizontal wins
    for (let row of grid) {
      for (let i = 0; i <= row.length - 4; i++) {
        let fourValues = row.slice(i, i + 4);
        let result = ConnectFour.isSame(fourValues);
        if (result) {
          return result;
        }
      }
    }

    // vertical wins
    for (let colNum = 0; colNum < grid[0].length; colNum++) {
      let column = [];
      for (let rowNum = 0; rowNum < grid.length; rowNum++) {
        column.push(grid[rowNum][colNum]);
      }
      for (let i = 0; i <= column.length - 4; i++) {
        let fourValues = column.slice(i, i + 4);
        let result = ConnectFour.isSame(fourValues);
        if (result) {
          return result;
        }
      }
    }

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
