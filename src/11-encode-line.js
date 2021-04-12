/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  let char = str[0];
  let count = 1;
  let final = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    } else {
      final += (count === 1 ? '' : count) + char;
      char = str[i];
      count = 1;
    }
    if (i === str.length - 1) {
      final += (count === 1 ? '' : count) + char;
    }
  }
  return final;
}

module.exports = encodeLine;
