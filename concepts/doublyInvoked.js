//* Uses Currying

function getTotal(num1, num2 = 0) {
  let sum = num1 + num2;
  num2 && console.log({ sum });
  return function (num2) {
    const sum = num1 + num2;
    console.log({ sum });
    return sum;
  };
}

//* These should give the same result
getTotal(10, 20);
getTotal(10)(20);

function getTotal2() {
  const args = Array.prototype.slice.call(arguments);
  if (args.length === 2) {
    console.log({ sum2: args[0] + args[1] });
    return args[0] + args[1];
  } else if (args.length === 1) {
    return function (num2) {
      console.log({ sum2: args[0] + num2 });
      return args[0] + num2;
    };
  }
}

getTotal2(10, 20);
getTotal2(10)(20);
