function isValidSudoku(board) {
    // Function to check if an array of numbers contains all digits from 1 to 9 without repetition
    const isValidSet = (numbers) => {
      const seen = new Set();
      for (let num of numbers) {
        if (num !== '.' && seen.has(num)) {
          return false;
        }
        seen.add(num);
      }
      return true;
    };
  
    // Function to get a column from the board
    const getColumn = (board, colIndex) => board.map(row => row[colIndex]);
  
    // Function to get a 3x3 grid from the board
    const getGrid = (board, startRow, startCol) => {
      const grid = [];
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          grid.push(board[i][j]);
        }
      }
      return grid;
    };
  
    // Validate each row, column, and 3x3 grid
    for (let i = 0; i < 9; i++) {
      if (!isValidSet(board[i])) {
        return false;
      }
  
      const column = getColumn(board, i);
      if (!isValidSet(column)) {
        return false;
      }
  
      // Determine start indices for each 3x3 grid
      const startRow = Math.floor(i / 3) * 3;
      const startCol = (i % 3) * 3;
      const grid = getGrid(board, startRow, startCol);
      if (!isValidSet(grid)) {
        return false;
      }
    }
  
    return true; // If all validations pass
  }
  
  module.exports = { isValidSudoku };
  