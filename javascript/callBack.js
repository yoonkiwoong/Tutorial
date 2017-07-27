var numbers = [20, 10, 32, 22, 11, 23, 1, 2, 5, 4];
var sortFunc = function(a, b) {
  console.log(a, b);
  return a - b;
};
console.log(numbers.sort(sortFunc));
