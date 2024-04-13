const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }
  if (start < 0 || end < 0) {
    return "ERROR";
  }

  let n = Math.abs(start - end) + 1;
  let sum = (n/2) * (start + end);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
