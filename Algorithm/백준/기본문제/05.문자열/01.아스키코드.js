"use strict";
// 컴퓨터는 숫자로밖에 메모리에 저장할 수 없다.
// 그래서 문자를 저장하고자 문자를 메모리에 저장하기 위해 숫자랑 매칭시켰는데,
// 아스키코드에 그 숫자값이 정해져있다.
// 문자에 해당되는 숫자코드 라고 생각하면 돼..!

// "문자".chatCodeAt() => 숫자로 바꿔줌

// charCodeAt() : ascii code의 문자를 숫자로 바꿔준다..!
let c = require("fs").readFileSync("dev/stdin").toString().trim();

let solution = (c) => {
  return c.charCodeAt();
};

console.log(solution(c));
