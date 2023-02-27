"use strict";
// 앞에서나 뒤에서 읽을 때 모두 같은 문자열 => reverse()와 원본이 같아야 해.
// 근데! 이제 알파벳 이외엔 싹 다 무시함.

// 정규식을 사용해서 알파벳이 아닌 것들은 싹 다 빈문자열로 바꿔버리자.

let str = "found7, time: study; Yduts; emit, 7Dnuof";
let solution = (str) => {
  let answer = "Yes";
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  // 소문자로 싹 다 바꿔줘야 정규식을 이용해서 소문자 이외의 것들은 죄다 빈문자열로 바꿔줄 수 있어.
  if (str !== str.split("").reverse().join("")) return "No";
  return answer;

  // 만약 같은 경우엔 answer(Yes)리턴하고 아니라면  "No"리턴한다.
};

console.log(solution(str));
