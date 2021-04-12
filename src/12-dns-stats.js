function getDNSStats(domains) {
  const final = {};
  const joint = [];
  const str = '.';
  domains.forEach((el) => {
    const tempaddress = el.split(str).reverse();
    tempaddress.forEach((e, i) => {
      const before = joint[i - 1] ? str + joint[i - 1] : '';
      const part = e + before;
      if (!joint.includes(part)) {
        joint.push(part);
      }
    });
  });
  joint.forEach((mainpart) => {
    let count = 0;
    domains.forEach((el) => {
      if (el.includes(mainpart)) {
        ++count;
      }
    });
    const letter = mainpart.split('.').reverse();
    let newletter = '';
    letter.forEach((el) => {
      newletter += str + el;
    });
    final[newletter] = count;
  });
  return final;
}

module.exports = getDNSStats;
