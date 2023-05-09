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
  // 🔴 var let const의 차이점 정리 🔴
  // 1. 재할당 여부 : const만 불가능
  // 2. 재선언 여부 : var만 가능
  // 3. scope : var은 함수제외 모든 곳에서 전역변수로 쓰임 => 함수 scope
  // - let const는 모든 block에서 지역변수로 사용됨 => 블록 scope
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

  //
  {
    let str = "-143";
    let changeToInt = parseInt(str);
    console.log(changeToInt, typeof changeToInt); // -143 number!
    // 문자열에서 -도 자동으로 숫자로 바꿔짐!
  }
}

{
  // 정수인지, 소수인지 check!
  let a = 3;
  if (a === parseInt(a)) console.log("정수 맞음!");
  else console.log("정수 아님...!");
}

{
  // es6부터 추가 된 문법!

  // ⭐️ shorthand property names
  const name = "지성";
  const age = 26;
  const jisung = { name, age };

  // ⭐️ Destructuring assignment
  // object, array
  // object
  let me = {
    a: "지성",
    b: "ㅇㅈㅇㅁㅈㅇㅁㅈ",
    sum() {
      return 1 + 3;
    },
  };

  const { a, b, sum } = me; // 함수 이름도 가능하다.
  console.log(sum());

  // array
  let arr = [1, 2, 3, 4, 5];
  let [num1, num2, num3, num4, num5] = arr;
  console.log(num1, num2, num3, num4, num5);
}

{
  // ✨ spread

  // 배열 복사 : 1차원까지만 깊은 복사, 2차원 부터는 JSON사용하자!
  let arr = [1, 2, 3, 4, 5];
  let arr2 = [...arr, 7]; // 복사 후 값 추가까지..!
  arr2[3] = 1000;
  console.log(arr, arr2); // arr2만 변경됨!

  // object복사!
  let obj = {
    name: "지성",
    age: 26,
  };
  let obj2 = {
    ...obj,
    phone: "010~~",
  };

  {
    // obj 1차원...깊은 복사!
    let obj3 = {
      name: "지성",
      age: 26,
    };
    let obj4 = { ...obj3, contact: { phone: "010" } }; // 객체 복사...!

    let obj5 = JSON.parse(JSON.stringify(obj4)); // 2차원 이상도 깊은 복사가 돼...!
    obj5.contact.phone = "011";
    console.log(obj4, obj5);
  }

  {
    // array
    let arr = [1, 2, 3, 4, 5];

    // 1. slice
    let arr2 = arr.slice(0); // 0번부터 끝까지..!

    // 2. spread
    let arr3 = [...arr];
  }
}
