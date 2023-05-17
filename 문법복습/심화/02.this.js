"use strict";

// this
// => 함수 호출방식에 의해서 결정된다
// ❗️javascript함수는 호출이 될 때 인자 이외에, argument객체와 this라는 빈 객체를 암묵적으로 전달받는다.
// this에 바인딩 할 객체가 정적이 아니라 동적으로 할당이 된다. => 즉, 함수가 호출되기 전까진 모름.. => 어떻게 호출되느냐에 따라서 할당되는 this가 다름.

{
  function test() {
    return this; // window객체!
  }

  console.log(test());
}

// window : javascript로 브라우져를 제어할 수 있도록 브라우져 전체를 의미하는 객체이다.
// javascript로 제어하기 위해서 window.~~ 방식으로 접근한다.
