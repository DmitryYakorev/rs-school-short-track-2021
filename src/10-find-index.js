/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let seridina = Math.round((array.length - 1) / 2);
  while (array[seridina] !== value) {
    if (value > array[seridina]) {
      seridina = Math.round(seridina / 2 + seridina);
      if (seridina > array.length - 1) {
        seridina = array.length - 1;
      }
    } else {
      seridina = Math.floor(seridina / 2);
    }
  }
  return seridina;
}

module.exports = findIndex;
