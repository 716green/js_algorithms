//* Data Types

//? null - object
console.log(typeof null); // object

//? undefined - undefined
console.log(typeof undefined); // undefined

//? {} - object
console.log(typeof {}); // object

// Arrays are objects
//? [] - object
console.log(typeof []); // object

// Test For Arrays
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

//? instanceof can test for arrays
console.log([] instanceof Array); // true
console.log({} instanceof Array); // false

console.log([] instanceof Object); // true
console.log({} instanceof Object); // true
