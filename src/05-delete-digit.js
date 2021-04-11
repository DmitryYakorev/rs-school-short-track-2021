/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = String(n).split('');
  // console.log(array);
  const min = Math.min(...array);
  array.splice(array.indexOf(String(min)), 1);
  // console.log(array);
  return +array.join('');
}

module.exports = deleteDigit;
