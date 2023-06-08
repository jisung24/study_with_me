"use strict";
// 1. 함수 종류
// - 일반 함수
// - 중첩 함수(안에 들어있는 함수 === 내부함수)
// - 콜백 함수
// - 클로져 함수

function outer() {
  const number = 10;

  return function inner() {
    return number;
  };
}

let func = outer(); // 함수 선언문이 들어감!
// func = function inner(){ return number; }
console.log(func()); // 10이 출력!

// 1. 지금 보면
// func함수가 호출되는 위치는 전역인데, outer안에 있는 number에 접근했어.
//

// - 즉시실행함수!

// 즉시실행 함수!
(function printNumber() {
  let age = 10;
  console.log(age);
})(); // 즉시 바로 실행하는 함수

{
  function outer() {
    function inner() {}
  }
}
