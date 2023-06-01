"use strict";
// ⭐️ 변수 이름 규칙 ⭐️

// 👉 1. 변수나 상수이름의 첫 번째 글자는 영어, $, _로만 시작한다.
{
  const _jisung = "지성";
  const $jisung = "김지성";
  const name = "jisung";
  console.log(name, _jisung, $jisung);
}

// 👉 2. 영어 소문자, 대문자는 구별됨
{
  const abc = "dada";
  const ABC = "dada";
}

// 👉 3. let이나 const는 변수 이름으로 사용 불가능 => 예약어 사용 불가능

// 👉 4. 공백문자를 변수에 담을 수 없다.
// ❗️따라서 공백 대신 대문자로 바꿔서
// whoAmI (Camel Case방식)으로 사용한다
// who_i_am (Snake Case방식)도 있음
{
  const myName = "김지성";
  console.log(myName);
}

// ✨ 우선 const를 default로 사용하고,
// 변경되어야 하는 변수는 let으로 바꿔서 선언해준다.

// var은 사용하지 말자!
var myName = "ㅇㅁㅈㅇㅁㅈㅇㅁㅈ";
var myName = "abc"; // 중복 선언도 가능함 => 나중에 코드 길어지면 정말 좋지않아....
console.log(myName);
// 함수를 제외하고, 모든 지역에서 전역변수가 되어서, 막 바꿔버릴 수 있다.

// ⭐️ data type ⭐️
// 1. 원시(primitive data type)
// - 총 7가지
// -1) number type -(2^53 - 1) ~ (2^53 - 1);
// ✨ 저 범위를 벗어날 경우 bigInt라는 type이 된다.
{
  const number = 123;
  console.log(typeof number, number); // type => number

  // 아주 작은숫자나, 아주 큰 수를 표현할 때! bigInt
  // 뒤에 n을 붙이고나 함수 BigInt()를 호출해서 생성할 수 있다.
  const bigNumber = 123n; // bigInt
  console.log(typeof bigNumber);

  const big = BigInt(1221);
  console.log(big, typeof big);
}
