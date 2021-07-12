//* Uses closures to count how many times the function processes

function myFunc() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne', instanceOne());
console.log('instanceOne', instanceOne());
console.log('instanceTwo', instanceTwo());
console.log('instanceTwo', instanceTwo());
console.log('instanceTwo', instanceTwo());
