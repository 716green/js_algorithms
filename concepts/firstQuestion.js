//* CURRIED FUNCTIONS

//* Using regular functions
// function tripleAdd(num1) {
//   return function (num2) {
//     return function (num3) {
//       let returnValue = num1 + num2 + num3;
//       console.log({ returnValue });
//       return returnValue;
//     };
//   };
// }

// tripleAdd(10)(20)(30);

//* USING ES6
const tripleAdd = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
};

console.log(tripleAdd(10)(20)(30));
// tripleAdd(10)(20)(30);
