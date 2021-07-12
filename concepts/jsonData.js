// const myJsonObj = {
//   myString: [some string],
//   myNumber: [some number],
//   myNull: [null],
//   myBoolean: [false],
//   myUndefined: [undefined],
//   myArray: [some array],
//   myFunction: [some function],
//   myObject: [some object]
// };
//* Define JSON
//? What is JSON? - JSON is JavaScript Object Notation. It is a container for key/value pairs. In the JSON format, the keys are wrapped in quotes while JS Objects do not wrap the keys in quotes.
//* Remove non-json values - DONE
//* Add in typed values in place of placeholders - DONE

const myJsonObj = {
  myString: 'some string',
  myNumber: 5,
  myNull: null,
  myBoolean: false,
  myArray: [2, 4, 6],
  myObject: {
    key1: 'Value 1',
    key2: 'Value 2',
  },
};

const trueJson = `{
  "myString": "some string",
  "myNumber": 5,
  "myNull": null,
  "myBoolean": false,
  "myArray": [2, 4, 6],
  "myObject": {
    "key1": "Value 1",
    "key2": "Value 2"
  }
}`;

//! removed function and undefined
// "myFunction": () => 'Hello World',
// "myUndefined": undefined,

console.log(JSON.parse(trueJson));

const myParsedJson = JSON.parse(trueJson);
console.log({ myParsedJson });

const {
  myString,
  myNumber,
  myNull,
  myBoolean,
  myUndefined,
  myArray,
  myFunction,
  myObject,
} = myJsonObj;

console.log({ myString, myNumber, myNull, myBoolean, myArray, myObject });

// const myFunc = myFunction();
// console.log({ myFunction: myFunction() });
// console.log({ myFunc });
console.log({ myUndefined });
