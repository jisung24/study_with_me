"use stirct";
// 사실 문제 이해를 못 해서 구글링을 했다..
// 결론적으로 자신보다 작은 값의 개수로 좌펴를 대체한다...!!

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let arr = input[1].split(" ").map(Number);
console.log(arr);
let set = Array.from(new Set(arr));
console.log(set);
let sortArr = set.sort((a, b) => b - a);
console.log(sortArr);
// 자신보다 작은 수!
// arr.length - (자신 idx + 1)
