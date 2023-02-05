"use strict";
// 가장 빨리 뒤집을 수 있는 방법
// 0001100
// 방법1 => 전체를 1110011로 하고, 00을 뒤집는다. (2번만에)
// 방법2 => 11을 뒤집는다. (1번만에)

// 숫자가 전부 다 같으면 0을 출력
// else 숫자가 다르면 뭉치의 개수를 파악한다.
// 0과 1뭉치의 개수가 1개이면 1번이면 돼!
// 결국 뭉치의 개수가 적은게 답이야!!!!!!!!!!!

// 뭉치를 구하는 방법
// : 다른 문자가 나올때까지 묶어준다..!
// 1의 뭉치의 개수와 0의 뭉치의 개수를 구해서 적은 뭉치의 개수가 답이야!!

// ❗️split을 사용하자!❗️❗️❗️
// 1이 몇 개든 문자열을 구분하려면 split('1")을 사용하면 0의 뭉치가 나와!

let input = require("fs").readFileSync("dev/stdin").toString().trim();

let boxCnt = (str) => {
  let box0 = str.split("1").filter((ele) => !(ele === ""));
  let box1 = str.split("0").filter((ele) => !(ele === ""));
  let result = 0;

  if (box0.length === 0 || box1.length === 0) {
    // 모두 같은 수 일 때!
    return result; // 0을 return한다.
  } else {
    // 같은 수가 아닐 땐 box뭉치가 적은게 답이다.
    result = box0.length > box1.length ? box1.length : box0.length;
  }

  return result;
};
console.log(boxCnt(input));
