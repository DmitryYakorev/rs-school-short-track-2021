/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The finalarrult should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const finalarr = [];

  for (let i = 0; i < matrix.length; ++i) {
    finalarr.push([]);

    const beforerow = matrix[i - 1];
    const row = matrix[i];
    const afterrow = matrix[i + 1];

    for (let j = 0; j < matrix[i].length; ++j) {
      let counter = 0;
      // console.log(beforerow, row, afterrow);
      [beforerow, row, afterrow].forEach((e) => {
        if (e) {
          if (e[j - 1] === true) counter++;
          if (e[j] === true) counter++;
          if (e[j + 1] === true) counter++;
        }
      });

      if (matrix[i][j] === true) {
        finalarr[i].push(1);
      } else {
        finalarr[i].push(counter);
      }
    }
  }

  return finalarr;
}

module.exports = minesweeper;
