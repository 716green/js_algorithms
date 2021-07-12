//* Question: What are the order of the numbers (1,2,3,4) logged out in?

function logNumbers() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

logNumbers(); // 1 - 4 - 3 - 2

// log 1
// log 4
// setTimeout 0s
// log 3
// setTimeout 1s
// log 2
