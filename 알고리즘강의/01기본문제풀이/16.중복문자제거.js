"use strict";

let eliminateDuplication = (str) => {
  let set = new Set(str);
  // 안에 문자열 들어감...
  let copyArr = [...set];
  return copyArr.join("");
};

console.log(eliminateDuplication("ksekkset"));
