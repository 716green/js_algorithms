const sampleData = [1, 2, 3, 4, 5];

// function iterateData(dataArr) {
//   for (let i = 0; i < dataArr.length; i++) {
//     console.log(dataArr[i]);
//   }
// }

// iterateData(sampleData);

function addUpto(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    total = i + sum;
    sum += i;
  }
  console.log({ sum });
  return sum;
}

function addUpto2(n) {
  let total = 0;
  Array.apply(null, Array(n + 1))
    .map((_, i) => i)
    .forEach((num) => (total += num));
  console.log({ total });
}

addUpto(100);
addUpto2(100);
