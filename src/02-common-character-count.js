/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arr = Array.from(s1.length > s2.length ? s2 : s1);
  const arr2 = Array.from(s1.length <= s2.length ? s2 : s1);
  for (let i = 0; i < arr2.length; ++i) {
    const indx = arr.indexOf(arr2[i]);
    if (indx !== -1) {
      count++;
      delete arr[indx];
    }
    // console.log(count, arr);
  }

  return count;
}

module.exports = getCommonCharacterCount;
