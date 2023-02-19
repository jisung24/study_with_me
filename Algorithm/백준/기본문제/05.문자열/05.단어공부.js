"use strict";

// 단어가 있으면, 그 단어에서 어떤 알파벳이 가장 많이 사용됐는지...!
// 대, 소문자 가리지 않음 => 전부 다 대문자로 바꿔놓고 시작해보자.!
// 왜냐면 가장 많이 사용된 문자는 대문자로 출력을 하라고 써져있음.

// set으로 어떤 문자들이 있는 지 싹 다 걸러내서 count++해주는 식으로!

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .toUpperCase();
let typeOfAlphabet = Array.from(new Set(input));
let countArr = new Array(typeOfAlphabet.length).fill(0);

for (let value of input) {
  if (typeOfAlphabet.indexOf(value) !== -1) {
    // 값이 있다면.....
    countArr[typeOfAlphabet.indexOf(value)]++;
  }
}

let countOfMaxValue = countArr.filter((ele) => ele === Math.max(...countArr));
// max값의 index를 구하는거야....!!!
countOfMaxValue.length >= 2
  ? console.log("?")
  : console.log(typeOfAlphabet[countArr.indexOf(Math.max(...countArr))]);
// max값이 몇 번째 index인 지 구해서.... 저기에 대입하면 돼..!

// 각 알파벳이 몇 번씩 나왔는지 다시 한 번 풀어보기...!
{
  let str = "wdawdafagvzxcvgsgqq";
  let eachAlphabet = Array.from(new Set(str)); // 각 알파벳의 개수
  let cntArr = new Array(eachAlphabet.length).fill(0);

  for (let value of str) {
    if (eachAlphabet.indexOf(value) !== -1) {
      cntArr[eachAlphabet.indexOf(value)]++;
    }
  }
  console.log(cntArr);
  let maxCnt = cntArr.filter((ele) => ele === Math.max(...cntArr));
}
