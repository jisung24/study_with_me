"use strict";
// 소문자, 대문자가 같이 존재하는 문자열을 입력받아서,
// 대문자로 모두 통일하여 문자열을 출력하는 프로그램!

let changeToCapital = (str) => {
  let answer = "";
  for (let value of str) {
    // 만약 소문자면..!
    value === value.toLowerCase() && (value = value.toUpperCase());
    answer += value;
  }

  return answer;
};
console.log(changeToCapital("ItisTimeToStudy"));
