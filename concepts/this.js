//* What is the 'this' keyword and how is it used?

//! My definition: The this keyword references the parent relationship for scope
//? Refers to the object that it is directly inside of
// todo - the 'this' keyword doesn't work when using arrow functions

var house = {
  price: 100_000,
  squareFeet: 2_000,
  owner: 'Taylor',
  totalPrice: null,
  getPricePerSquareFoot: function () {
    //? These return the same thing:
    // return house.price / house.squareFeet;
    // return this.price / this.squareFeet;
    this.totalPrice = this.price / this.squareFeet;
  },
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());
console.log(house.totalPrice);
