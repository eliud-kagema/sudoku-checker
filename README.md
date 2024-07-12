# Sudoku Checker
A JavaScript application to validate Sudoku boards for correctness according to the Sudoku game rules.

## Project Summary
The Sudoku Checker is a JavaScript module designed to check if a given 9x9 Sudoku board is valid. It verifies the board against three main rules:

Each row must contain all digits from 1 to 9 without repetition.
Each column must contain all digits from 1 to 9 without repetition.
Each of the nine 3x3 sub-grids must contain all digits from 1 to 9 without repetition.
The module provides a function isValidSudoku(board) that returns true if the board is valid according to these rules, and false otherwise.

## Features
Validates complete Sudoku boards for correctness.
Handles both numeric and '.' placeholders for empty cells.


## Getting Started
### Prerequisites
        Ensure you have the following installed:

        Node.js (v12.x or higher)
        npm (v6.x or higher)
        Installation
        Clone the repository:

        '''bash
        git clone <repository-url>
        cd sudoku-checker

### Install dependencies:

        '''bash
        npm install


### Testing 
        '''bash
        npm test

### Contributing
Contributions are welcome! To contribute to Sudoku Checker:
Fork the repository
Create your feature branch (git checkout -b feature)
Commit your changes (git commit -am 'Add feature')
Push to the branch (git push origin feature)
Create a new Pull Request


## License
This project is licensed under the MIT License - see the LICENSE file for details.

