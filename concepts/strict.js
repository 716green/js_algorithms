'use strict';

//? Enforce stricter parsing and error handling in the code
// - Prevents the use of global variables
// - - declaring vars without var, let, or const
// city = london;

// - Prevents using non-unique param names
// function myFunc(a,a,b) {} // no good with strict

function myFunc(a, a, b) {
  console.log(a, a, b);
} // no good with strict

// myFunc('a', 'a2', 'b'); // without strict: // a2 a2 b
// myFunc('a', 'a2', 'b'); // WITH strict: // ERROR
