let testResults = [1.23, 4.56, 7.89, 12.34, 56.78];

for (let testResult of testResults) {
  console.log(testResult);
}

testResults.forEach((testResult) => console.log(testResult));

for (let i = 0; i < testResults.length; i++) {
  console.log(testResults[i]);
}
