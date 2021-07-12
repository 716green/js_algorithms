var x = 10;

function y() {
  function x() {} // hoisted
  x = 100;
  return;
  // function x() {} // hoisted
}

y();

console.log(x);
