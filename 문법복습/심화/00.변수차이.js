"use strict";
console.log(d); // undefined가 됨 => 37번째 줄에 전역변수 var d를 선언해놓고, 호이스팅돼서 위로 초기화문과 함께 올라옴!
// var let const 차이!
// TDZ
// Hoisting

// 1. 재선언 가능(var만 가능 let const는 불가능)
{
  var a = 10;
  var a = 2;
  console.log(a); // 2로 찍힘!
}

// 2. 재할당 가능(var let가능 const불가능)
{
  var a = 10;
  a = 20;
  console.log(a);

  let b = 10;
  b = 100;
  console.log(b);

  const c = 10;
  // c = 100; // Assignment to constant variable.
  console.log(c);
}

// 3. var은 선언 + 초기화가 runtime전에 됨!
// 즉, 1번줄부터 읽기전에 var은 이미 undefined로 초기화가 된 채로 등장함
// 근데 원래 초기화가 되기 전에 변수에 접근할 수 없다.
// TDZ에 있기 때문이다. => Temporal Dead Zone

// ❗️TDZ(Tempoal Dead Zone)❗️
// 변수가 초기화 될 때 까지 존재하는 위치로, 변수를 사용할 수 없다.
{
  // var a = undefined; // 하지만 var은 함수를 제외한 블록에선 전역변수이다.
  // 그래서 1번째 줄로 올라간다! =>
  console.log(d); // undefined!
  var d = 10; // scope최상단으로 hoisting이 돼서,
  console.log(d); // 10
}

{
  // ⭐️ Hoisting
  // run time전에 변수 선언문을 그 scope최상단으로 올려주는 동작!
  // 하지만 var은 선언과 초기화가 동시에 돼서, undefined가 된 채로 가장 scope최상단으로 옮겨진다!

  let a;
  console.log(a); // undefined
}

{
  // var let const 전부 호이스팅 된다!
}
