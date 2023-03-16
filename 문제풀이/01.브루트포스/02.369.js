"use strict";
// N까지 숫자를 돌 때 박수 횟수

let clapCnt = (number) => {
  let answer = 0;
  let hash = {
    3: 0,
    6: 0,
    9: 0,
  };
  for (let i = 3; i <= number; i++) {
    let arr = i.toString().split("").map(Number);
    // 근데 3 6이 몇 번 나왔는지... 무조건 완탐으로 풀어야 돼...!
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] in hash) {
        // 찾을 때 O(1)로 찾아줌 => 배열이었으면 O(N)
        hash[arr[j]] += 1;
      }
    }
  }

  let claps = Object.values(hash).reduce((acc, cur) => acc + cur);
  return claps;
};

let number = Number(require("fs").readFileSync("dev/stdin").toString());
console.log(clapCnt(number));
