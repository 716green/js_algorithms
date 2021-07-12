//* 3 Ways to create objects
const objectArray = new Array();
const carArray = [];

//? Object Literal - Most common way
const objectLiteral = {
  outerKey: 'outerValue',
  nestedObject: {
    nestedKey: 'nestedValue',
  },
  helloWorld: function () {
    console.log('Hello World');
  },
};

//? New Keyword
const newObject = new Object();
newObject.outerKey = 'outerValue';
newObject.nestedObject = new Object();
newObject.nestedObject.nestedKey = 'nestedValue';
newObject.helloWorld = function () {
  console.log('Hello World');
};

//? Created Object
const createdObject = Object.create({});
createdObject.outerKey = 'outerValue';
createdObject.nestedObject = Object.create({});
createdObject.nestedObject.nestedKey = 'nestedValue';
createdObject.helloWorld = function () {
  console.log('Hello World');
};

//? Prototype Object
const prototypeObject = Object.prototype.constructor();
prototypeObject['outerKey'] = 'outerValue';
prototypeObject['nestedObject'] = {};
prototypeObject['nestedObject']['nestedKey'] = 'nestedValue';
prototypeObject['helloWorld'] = () => console.log('Hello World');

//? Constructor Function - Used in Classes
function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}
Car.prototype.getColor = function () {
  return this.color;
};

objectArray.push(objectLiteral, newObject, createdObject, prototypeObject);

const car1 = new Car('Blue', 'Honda', 2001);
const car2 = new Car('Silver', 'Tesla', 2021);

console.log(car1.getColor());
console.log(car2.getColor());
carArray.push(car1, car2);

console.log({ objectArray });
console.log({ carArray });
