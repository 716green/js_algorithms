//* The "this" keyword will refer to the global scope when used in nested functions in the browser
//? To mimic this in node, the whole expression can be wrapped in an IIFE

(function () {
  this.color = 'red';

  var myCar = {
    color: 'Blue',
    logColor: function () {
      var self = this;
      console.log('In logColor - this.color: ' + this.color);
      console.log('In logColor - self.color: ' + self.color);
      (function () {
        console.log('In IIFE - this.color: ' + this.color);
        console.log('In IIFE - self.color: ' + self.color);
      })();
    },
  };

  myCar.logColor();
})();
