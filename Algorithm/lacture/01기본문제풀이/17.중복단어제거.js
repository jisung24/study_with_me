"use strict";
// 중복 제거 단어.
// 단어 1개씩을 배열에 넣어서 set을 만든다!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let countOfStrings = input.shift();
let set = new Set(input);
console.log(set);
