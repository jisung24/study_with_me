"use strict";
// 프로그래머스 삼총사.

// 겹치지 않게 싹 다 한 번씩 고른다!
let arr = [1, 2, 3];
let cnt = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 4) cnt += 1;
  }
}

console.log(cnt);

{
  let s = "1S2D*3T";
  // 쪼개기...! => 정규식 써야할거같은데....
  // 숫자는 (0 - 10)
  // 보너스 (S D T) ==> 영어를 기준으로 잘라야하는데..!
  // 옵션 (# * 없을수도..!)

  // 자르기에 불규칙적이야.. => 그럼 하나하나 따로따로
  // 즉, 어떤 문자 1개로 자르는게 아니라, 문자 type으로 잘라야하는 문제라서...
  // 1. 정규식
  // 2. 일일이 확인하는 식!

  // 숫자라면... 일단 넣는다.!
  // 1 2 3 단계 나눠서 계산해야하니까 stack일수도...?

  // 숫자일 때...!
  // 숫자를 그냥 계산해주는...!
  let num = 0;
  let answer = [];
  let temp = 0; // 현재 숫자를 저장하는 변수!
  // 문자열을 보통 어떤 글자로 나누거나 어떤 type으로 나눈다.
  // 근데 타입은 정규식을 써야하는게 대표적이어서... 일단 for로 전체를 돌려준다.
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 && s[i] <= 9) {
      if (s[i] === 1 && s[i + 1] === 0) {
        i += 1; // 10이니까 뒤에 0을 건너뛴다.
        temp = 10; // 현재숫자에 넣어준다.
      } else {
        temp = s[i]; // temp를 다시 시작해준다..!
      }
    } else if (s[i] === "S") answer.push(temp); // 그냥 그대로!
    else if (s[i] === "D") answer.push(Math.pow(temp, 2)); // 2qogkrh...
    else if (s[i] === "T") answer.push(Math.pow(temp, 3));
    else if (s[i] === "#") answer[answer.length - 1] *= -1;
    else if (s[i] === "*") {
      answer[answer.length - 2] *= 2;
      answer[answer.length - 1] *= 2;
    }
  }
  console.log(answer);
}
