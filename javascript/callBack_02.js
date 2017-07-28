var a = [10, 3, 2, 67, 5, 1];

function b(val1, val2) {
  console.log(val1, val2);
  return val1 - val2;
} //calback함수 즉, 누군가에게 사용될 함수

a.sort(b); //sort라는 함수에 다른 함수를 전달 했다. b라는 함수를 필요할때 사용한다.

console.log(a);
