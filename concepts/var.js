// var num = 50;

// function logNumber() {
//   console.log({ num });
//   var num = 100;
// }

// logNumber();

//* After Hoisting:
// var num = 50;

function logNumber() {
  var num;
  console.log({ num }); // undefined
  num = 100;
}

logNumber();
