(function() {
  var MYAPP = {};
  MYAPP.calculator = {
    left: null,
    right: null
  };
  MYAPP.coordinate = {
    left: null,
    right: null
  };
  MYAPP.calculator.left = 10;
  MYAPP.coordinate.right = 20;
  function sum() {
    return MYAPP.calculator.left + MYAPP.coordinate.right;
  }
  console.log(sum());
})();
