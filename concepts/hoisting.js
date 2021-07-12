//* Hoisting is the method where JavaScript brings variable declarations and functions up to the top of scope
// var color = 'blue';

//* FUNCTION EXPRESSION VS FUNCTION DECLARATION

var color;
console.log({ color });
color = 'blue';
console.log({ color });

// console.log(getProduct(2,3)) // Won't work
/*
var - function scoped

const/let - block scoped
*/

//? Function Expression
//! This is not hoisted
var getProduct = function (num1, num2) {
  return num1 * num2;
};
console.log(getProduct(2, 3)); // This is fine

console.log(getProduct2(2, 3)); // This will work
//? Function Declaration
//* This is hoisted
function getProduct2(num1, num2) {
  return num1 * num2;
}
