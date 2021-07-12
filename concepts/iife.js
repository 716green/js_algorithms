/* //* What is an IIFE?
An IIFE is an immediately invoked function expression (anonymous?). It processes instructions 
at the point in the code that it is created and called simultaneously
//* Why are IIFE's used?
IIFE's are used to manage the control flow without modifying globally scoped values
*/

(() => {
  console.log('This is an IIFE');
})();
