"use strict";
// 계속 문자열 변환 문제가 나옴. => replace로 해결!

let changeEachOther = (str) => {
  let answer = "";
  for (let value of str) {
    value === value.toLowerCase()
      ? (value = value.replace(value, value.toUpperCase()))
      : (value = value.replace(value, value.toLowerCase()));

    answer += value;
  }

  return answer;
};
console.log(changeEachOther("sTuDy"));
// 문자열을 이거에서 저걸로 바꾼다? ==> replace가 짱이야!!
