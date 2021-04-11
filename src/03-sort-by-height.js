/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The arr3 should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = [];
  const arr3 = [];

  for (let i = 0; i < arr.length; i++) {
    arr3.push(arr[i]);
    if (arr[i] !== -1) {
      arr2.push(arr[i]);
    }
  }

  arr2.sort((a, b) => b - a);
  // console.log(arr2);
  for (let i = 0; i < arr3.length; ++i) {
    if (arr3[i] !== -1) {
      arr3[i] = arr2.pop();
    }
  }
  // console.log(arr3);
  return arr3;
}

module.exports = sortByHeight;
