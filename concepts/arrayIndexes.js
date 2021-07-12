//* Objects use memory address references so you can not use indexOf on objects or arrays

const myArray = [5];
const anotherArray = myArray;

console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1
console.log('hello world'.indexOf('o')); // 4
console.log([[1], [2], [3], [4]].indexOf([2])); // -1

const objectIndex = [{ name: 'Pam' }, { name: 'Kent' }];

const searchForIndexByName = (value) => {
  let returnValue;
  objectIndex.forEach((obj, i) => {
    if (obj.name === value) {
      returnValue = i;
    } else return;
  });
  return returnValue;
};

const itemIndex = searchForIndexByName('Kent');
console.log({ itemIndex });
