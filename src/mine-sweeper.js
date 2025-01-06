const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some subArrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {subArray<subArray>} matrix
 * @return {subArray<subArray>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];

  for (let i = 0; i < matrix.length; i++) {
    const subArr = [];

    for (let j = 0; j < matrix[i].length; j++) {
      let sum = 0;

      for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
          if (!(r === 0 && c === 0)) {
            const row = i + r;
            const col = j + c;

            const isRowExceeded = row >= 0 && row < matrix.length;
            const isColExceeded = col >= 0 && col < matrix[i].length;
            // console.log(isRowExceeded, isColExceeded, matrix[row][col])
            const isMine = isRowExceeded && isColExceeded && matrix[row][col];

            if (isMine) sum++;
          }
        }
      }

      subArr.push(sum);
    }

    // console.log(subArr)
    arr.push(subArr);
  }

  // console.log(arr)
  return arr;
}

module.exports = {
  minesweeper,
};
