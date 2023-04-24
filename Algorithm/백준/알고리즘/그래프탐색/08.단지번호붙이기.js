"use strict";
// 숫자로 바꾸기
// Number
// - 단 정수와 실수 NaN으로 나뉜다 => 셋 다 숫자임!
console.log(Number("1414")); // 1414
console.log(Number("안녕!")); // NaN
console.log(Number("1414.2222")); // 1414.2222

// 숫자 중 정수로 바꿔주고 싶다면?
// - parseInt : 문자열이나, 소수가 들어오면 내림해서 정수부분만!
console.log(parseInt(2.444)); // 2
console.log(parseInt("dwdaw")); // NaN
console.log(parseInt(2)); // 2
console.log(parseInt("3월")); // 3 => ❗️parseInt는 최대한을 사용한다 => Number는 그냥 숫자가 아니라면 false❗️

// 숫자 중 실수로 바꿔주고 싶다면?
console.log(parseFloat(2.444));
console.log(parseInt(parseFloat("2.44"))); // 2

// 정수인지 확인하고 싶다면?
console.log(Number.isInteger("dawdaw"));
console.log(Number.isInteger(2));
console.log(Number.isInteger("44")); // 문자열!

// 그럼 문자열 속에서 숫자인지 확인해주고 싶으면?
let s = "123daa";
// isNaN으로 하자!!!!!!!!!!!!
// isNaN으로 제발... === false라고 생각해보자!

// ❗️NaN
console.log(typeof NaN); // number => 숫자타입에 속해있다.
console.log(Number.isNaN("4242")); // false
console.log(Number.isNaN("a")); // false
// 뒤에서 n번째
// arr.length - n이다.

// 즉, 뒤에서 4번째는 숫자
// 그 앞은 *
// 0부터 length - 5까지는 *
// 그 뒤부턴 그냥 숫자.

// 없는 수 찾기
// false인 값 만 가져오기...!
let hash = new Map();
let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
for (let i = 0; i <= 9; i++) {
  hash.set(i, false);
}

for (let i = 0; i < numbers.length; i++) {
  hash.set(numbers[i], !hash.get(numbers[i]));
}
hash.forEach((value, index) => {
  console.log(value, index);
});

// 영어 정렬
// 대문자가 더 작아....
//

// phone문제
// 문자열 repeat
console.log("*".repeat(4));
// slice => 있는 거 일부를 그대로 사용하고 싶을 때!

let num1 = 10;
let num2 = 20; // 최소공배수...!
// 큰 수를 곱해서... num1도 그 수로 나눠 떨어지면 ㅇㅋ;

// 최소공배수 (LCM)
// num1이 작거나 같다고 생각하고!
function LCM(num1, num2) {
  if (num1 === num2) return num1;

  let i = 1;
  while (true) {
    if ((num1 * i) % num2 === 0) return num1 * i;
    i++;
  }
}

console.log(LCM(10, 40));

// 최대공약수!
function GCD(num1, num2) {
  if (num1 === num2) return num1;
  // num1과 num2가 다를 때
  // num1 <= num2라고 가정!
  let answer = [];
  for (let i = 1; i <= num1; i++) {
    if (num2 % i === 0) answer.push(i);
  }

  return answer[answer.length - 1];
}
console.log(GCD(10, 20));

var decimal = 45;

var binary = decimal.toString(3).split("").reverse(); // 2진수로
console.log(binary);
var octal = decimal.toString(8); // 8진수로
var hex = decimal.toString(16); // 16진수로

// 🔴 프로그래머스 이상한 문자 만들기 🔴
{
  let s = "try hello world".split(" ").map((v) =>
    v
      .split("")
      .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
      .join("")
  );
  console.log(s);

  let s1 = "dawdawdawdaaa"
    .split("")
    .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()));
  // 이런식으로 모든 값 개개인에 따라서 return값을 줄 수 있어!
  console.log(s1);
}

{
  let size = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ].map(([a, b]) => (a > b ? [b, a] : [a, b])); // 이런 직관적인 코드 쌉가능!
  // 이렇게 구조분해할당을 이용하면 바로 직관적으로 swap이 가능하다.

  let arr = [2, 4];
  console.log([arr[1], arr[0]]);
  console.log(size);
  let max = 80; // 구했다고 치고..!

  // 2차원 배열에서의 map((v)) v이용하기
  size.forEach(([a, b]) => {
    // ❗️구조분해할당❗️
    console.log(a, b);
  });

  // 안에 있는 2차원 배열은 []로 접근한다!! => 구조분해 할당으로!!!!!!

  // 🔴 자바스크립트 앞이나 뒤에 자릿수 맞추기 위해 특정한 값 채우기 🔴
  // 앞에 채우고 싶으면 padStart => padding을 의미하는거 같아.. 대충
  // 뒤에 채우고 싶으면 padEnd
  {
    let number = 9;
    // console.log(number.toString(2).padStart(5, "$"));
  }
}

{
  let n = 6;
  let arr1 = [46, 33, 33, 22, 31, 50];
  let arr2 = [27, 56, 19, 14, 14, 10];
  let answer = "";
  let real = [];
  for (let i = 0; i < n; i++) {
    let answer1 = arr1[i].toString(2).padStart(n, 0);
    let answer2 = arr2[i].toString(2).padStart(n, 0);
    console.log(answer1, answer2);
    for (let j = 0; j < answer1.length; j++) {
      if (answer1[j] === "1" || answer2[j] === "1") {
        answer += "#";
      } else answer += " ";
    }
    answer += "\n";
  }
  // console.log(answer.trim());
  // console.log(answer);
  // let arr = answer.trim().split("\n");
  // console.log(arr);
}

{
  // 문자열 내 마음대로 정렬하기!
  // index 1번을 기준으로 정렬!
  let arr = ["abce", "abcd", "cdx"];

  let sort = arr.sort((a, b) => {
    if (a[1] > b[1]) return 1; // 내림차순 정렬
    else if (a[1] < b[1]) return -1;
    else {
      // 같을 경우는 그냥 사전으로 정렬!
      if (a > b) return 1;
      else if (a < b) return -1;
    }
  });

  // console.log(sort);
}

{
  let s = "one4seveneight";

  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;
}

{
  // split과 join에 대해서 좀 더 자세하게 풀기!
  let number = "one";
  let num = 1;
  let str = "one234";
  let sp = str.split(number); // "one"을 ,삼아서... '','234';
  console.log(sp);

  let newSp = sp.join(1); // 1을 구분자로 다시 split을 합쳐주겠다!
}

{
  // ❗️크기가 작은 부분 문자열❗️
  let s = "3141592";
  let p = "271";
  // 7글자
  // 3글자
  let num1 = Number(p);
  let answer = 0;
  // index 4까지...!
  for (let i = 0; i <= s.length - p.length; i++) {
    let slicedArr = s.slice(i, i + p.length);
    let num2 = Number(slicedArr);

    if (num1 >= num2) answer += 1;
  }

  console.log(answer);
}

{
  // Y를 hash로 만든다음에... x에서 돌면서 찾아!
  let hash = new Map();
  let Y = "42531";

  for (let i = 0; i < Y.length; i++) {
    if (!hash.has(Y[i])) hash.set(Y[i], 1);
    else hash.set(Y[i], hash.get(Y[i]) + 1);
  }
  console.log(hash);
  // hash에 check함!
  let x = "12321";
  let answer = [];
  for (let i = 0; i < x.length; i++) {
    if (hash.has(x[i])) {
      hash.set(x[i], hash.get(x[i]) - 1);
      if (hash.get(x[i]) === 0) hash.delete(x[i]); // 만약 0이 되면 삭제한다.
      answer.push(x[i]);
    } else {
      // 존재하지 않는다면 그냥 버린다.
    }
    console.log(hash, answer);
  }
}

{
  // 시저 암호
}
