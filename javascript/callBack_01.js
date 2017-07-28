function cal(func, num) {
  return func(num); // 첫번째 인자로 전달된 값을 호출 하면서, 두번쨰 인자로 전달된 값을 집어넣게 된다. return은 첫번째인자의 값 뒤에 num을 붙혀주는 것이다.
}

function increase(num) {
  return num + 1; // 인자로 전달된 값에 +1
}
function decrease(num) {
  return num - 1; // 인자로 전달된 값에 -1
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));
