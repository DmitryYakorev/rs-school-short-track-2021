function getSumOfDigits(n) {
  let final = String(n).split('').reduce((acc, e) => acc + +e, 0);
  if (String(final).length > 1) {
    final = getSumOfDigits(final);
  }
  return final;
}

module.exports = getSumOfDigits;
