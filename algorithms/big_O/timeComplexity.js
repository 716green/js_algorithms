const timer = require('../../timer');

//* faster, less accurate
function addUpto(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  console.log({ total });
  return total;
}

//* slower, more accurate
function addUpto2(n) {
  const total = (n * (n + 1)) / 2;
  console.log({ total });
  return total;
}

// addUpto(100);
// addUpto2(100);

timer(addUpto(1_000_000_000));
timer(addUpto2(1_000_000_000));

// O(n) * 2 simplifies as O(n)
function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}

countUpAndDown(10);

// O(n^2) - Exponential Curve
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(10);

const divider = (value = '') => {
  console.log(`========${value}========`);
};

// // O(n)
// function logAtLeast5(n) {
//   if (n <= 5) n = 5;
//   for (let i = 0; i < n; i++) {
//     console.log(i + 1);
//   }
// }

// O(n)
function logAtLeast5(n) {
  if (n <= 5) n = 5;
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

console.log(divider('logAtLeast5 - 1'));
logAtLeast5(1);
console.log(divider('logAtLeast5 - 10'));
logAtLeast5(10);

// O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

console.log(divider('logAtMost5 - 1'));
logAtMost5(1);
console.log(divider('logAtMost5 - 100'));
logAtMost5(100);
