let result;

// Regular
function getProduct(num1, num2) {
  return num1 * num2;
}

result = getProduct(10, 20);
console.log({ result });

// Curried
function getProductCurry(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

result = getProductCurry(10)(20);
console.log({ result });

// Practical Currying
// function getTravelTime(distance, speed) {
//   return distance / speed;
// }
// result = getTravelTime(600, 50);
// console.log({ result });

function getTravelTime(distance) {
  return function (speed) {
    return distance / speed;
  };
}

const travelTimeBostonNYC = getTravelTime(400);

result = travelTimeBostonNYC(50);
console.log({ result });
