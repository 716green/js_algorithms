// installed performance-now package
const performanceNow = require('performance-now');

const timer = (fn) => {
  let t1 = performanceNow();
  fn;
  let t2 = performanceNow();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
};

module.exports = timer;
