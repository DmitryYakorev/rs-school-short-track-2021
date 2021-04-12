function removeKFroml(l, k) {
  let final = null;
  let before;
  let temp;
  let a = l;
  while (a.next) {
    if (a.value === k) {
      if (!final) {
        final = a.next;
      }
      temp = a.next;
      if (before) {
        before.next = temp;
      }
      a.next = null;
      a = temp;
    } else {
      before = a;
      a = a.next;
    }
  }
  return final;
}

module.exports = removeKFroml;
