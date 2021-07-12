//* Success!
//? 'use strict' can be used inside of functions

(function () {
  'use strict';
  var x = (y = 200);
})();

console.log('y: ', y); // 200
console.log('x: ', x); // undefined
