// O(1) space
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 2, 3, 4, 5])); // 15

// one number: total
// another number: i
// 2 total vars

// O(n) space
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// one var = newArr
// another var = i
// 2 total vars

console.log(double([1, 2, 3, 4, 5])); // 15
