"use strict";
// ⭐️ data 출력 ⭐️
{
  const name = "김지성!";
  console.log("name >> ", name);
  console.log(`name >> ${name}`); // 벡틱 사용!

  // template literal
  // - 따옴표 대신 backtick(`)을 사용한 문자열 표기법!
  // 1. 여러 줄 표시가 가능하다.
  // 2. 문자열 인터폴레이션
  // - 백틱 내에 ${}로 새로운 문자열을 삽입할 수 있는 기능.
  // - 인터폴레이션 내의 표현식은 문자열로 강제 type변환된다.
  let str = `
  hello world1,
  hello world2,
  `;
  console.log(`${str}`); // 문자열 인터폴레이션! => ${}안에다가 새로운 문자열 삽입!
  console.log(`${44444}`);
}

// ⭐️ 변수 선언 방법 ⭐️
// - var, let, const(상수)
{
  // ❗️자바스크립트는 동적 타입 언어이다❗️
  // 👉 보면 선언할 때, 타입이 결정되는 것이 아니라 할당에서 type이 결정된다.
  // 👉 var, let, const로는 type을 알 수 없기 때문이다.
}

{
  // 문자열에서 숫자찾기!
  // isNaN(문자열)
  // true이면 숫자가 아니고, false이면 숫자이다.
  let str = "1a6ghj";
  let sum = 0;
  for (let value of str) {
    if (isNaN(value) === false) sum += Number(value);
  }
  console.log(`숨어있는 숫자의 합..! >> ${sum}`);

  // 연속하는 숫자까지..!
  let str2 = "a65bq99";
  let answer = "";
  for (let value of str2) {
    if (isNaN(value)) answer += value.replace(value, " ");
    else answer += value;
  }
  let nums = answer.trim().split(" ");
  let total = 0;
  for (let value of nums) {
    if (isNaN(value) === false) total += Number(value);
  }

  console.log(total);
}

{
  // 정수인지, 소수인지 check!
  let a = 3;
  if (a === parseInt(a)) console.log("정수 맞음!");
  else console.log("정수 아님...!");
}
