/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const sum = [];
  const temp = matrix;
  for (let i = 0; i < temp.length; ++i) {
    for (let j = 0; j < temp[i].length; ++j) {
      if (!temp[i + 1]) break;
      if (temp[i][j] === 0) {
        temp[i + 1][j] = 0;
      }
    }
    sum.push(temp[i].reduce((acc, e) => acc + e));
  }
  return sum.reduce((acc, e) => acc + e);
}

module.exports = getMatrixElementsSum;
