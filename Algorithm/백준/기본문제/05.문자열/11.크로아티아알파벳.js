"use strict";
// 그냥 객체로 풀어보자.. => 계속 배열 첫 번째 부터 순환해야 해!
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
// let str = "nljj";

// let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let str = "ljes=njak";
for (let alphabet of croatia) {
  str = str.split(alphabet).join("Q"); //이 부분이 가장 핵심.
}
console.log(str);

// 찾은걸 Q로 바꿔주라는거같아..
