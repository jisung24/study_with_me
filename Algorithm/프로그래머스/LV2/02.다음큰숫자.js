"use strict";
// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

// 그럼 n부터 시작해서... 언제까지인지는 모르지만.. answerArr !== []
// n을 2진수의 1의 개수와
// ?의 2진수의 1의 개수를 비교해서 같으면
// 어떤 answerArr에 넣는데 넣으면 끝!
let n = 15;
let nToDec = n.toString(2);
console.log(nToDec);
let answerArr = [];
while (answerArr.length === 0) {
  n++; // n을 1 늘린다...!
  // 값이 차게되면... 취소한다..!
  console.log("다음 수 >> ", n);
  let nextNDec = n.toString(2); // 그 다음수의 2진수..!

  let oneCnt = 0;
  let nextOneCnt = 0;

  for (let value of nToDec) {
    if (value === "1") {
      oneCnt++;
    }
  }

  for (let value of nextNDec) {
    if (value === "1") {
      nextOneCnt++;
    }
  }
  if (oneCnt === nextOneCnt) {
    answerArr.push(n);
  }
}
