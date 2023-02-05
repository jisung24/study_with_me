"use strict";
const input = Number(require("fs").readFileSync("dev/stdin").toString());

let printOneToInput = (N) => {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  return sum;
  //   // 1부터 N까지를 갖고있는 배열을 출력!
  //   let arr = [];
  //   for (let i = 1; i <= N; i++) {
  //     arr.push(i);
  //   }

  //   return arr.reduce((acc, cur) => acc + cur);
};

console.log(printOneToInput(10));
console.log(printOneToInput(6));
