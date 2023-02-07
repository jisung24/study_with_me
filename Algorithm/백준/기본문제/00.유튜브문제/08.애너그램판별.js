"use strict";
// 애너그램 : 두 단어는 다르지만 스펠링 구성은 같다..
let listen = "listen";
let silent = "silent";

// 1. 배열로 바꿔서, 정렬을 한다.
// 문자열은  === 로 비교할 수 있어!!!!!!!!!
// console.log("listen" === "listen");

let isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else {
    if (str1.split("").sort().join("") === str1.split("").sort().join("")) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(isAnagram("listen", "silent"));

// tip : 똑같은 지 아닌 지 비교 => 문자열로 만들어서 === 쓰면 된다.
// 2. 배열을 합쳤을 때 그 스펠링의 개수가 무조건 짝수이면 된다.
