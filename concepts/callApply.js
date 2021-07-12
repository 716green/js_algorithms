/* //* Describe call() and apply() methods
? 1) How do they function?
? 2) How do they what arguments do they take?
? 3) How are they different?               */
// call() and apply() are used to change the scope of 'this' within an object

const car1 = {
  brand: 'Porche',
  getCarDescription: function (cost, year, color) {
    console.log(
      `This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.`
    );
  },
};

const car2 = {
  brand: 'Lamborghini',
};

const car3 = {
  brand: 'Ford',
};

//* call() changes the 'this' context
car1.getCarDescription(80_000, 2010, 'blue');

//* call uses order
// call(what_do_we_want_the_this_context_to_be?, param1, param2...)
car1.getCarDescription.call(car2, 200_000, 2013, 'yellow');

//* apply uses array
// apply(object_to_map_to_this, [params_in_order])
car1.getCarDescription.apply(car3, [30_000, 2011, 'red']);
