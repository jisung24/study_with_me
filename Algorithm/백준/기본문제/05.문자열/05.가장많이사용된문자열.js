"use strict";
// uppercase때린다음 계산하자!
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim() // 그니까 무조건 문자열 관련해선 공백문자를 없애주고 처음에 시작하자!!!!!!!!
  .toUpperCase(); // 대소문자 구별 안 하구, 어차피 대문자로 출력이니까 대문자로 만들어주자!

let set = new Set(input); // 중복이 없는 배열을 만들어서, 각 문자의 개수를 구하는데,
// 만약 이걸 안 해줬을 경우 mmm이면 333이 출력이 된다. M => 3 이런식으로만 나와야 돼!
let copyArr = [...set]; // set은 배열이 아니라서, 복사본을 하나 배열로 만들어줘야 한다.
let countArr = []; // 각 알파벳의 개수의 최댓값의 개수! => 2개 이상이면 ? 아니면 그 문자 출력!

for (let i = 0; i < copyArr.length; i++) {
  let count = 0; // 반복문 내에서 각 알파벳에 대한 개수를 구하는 변수
  for (let j = 0; j < input.length; j++) {
    copyArr[i] === input[j] && count++;
    // 만약 같다면 계속 count를 ++시켜줘.
    // 단축평가
    // 앞 && 뒤 (앞이 true라면 뒤를 출력)
    // 앞 || 뒤 (앞이 false라면 뒤를 출력)
  }
  countArr.push(count); // 각각의 개수를 변수에 넣어준다.
}
let maxValue = Math.max(...countArr); // 최댓값을 구하고,
let maxCnt = 0; // 최댓값이 몇 개가 있는지 구함.

for (let i = 0; i < countArr.length; i++) {
  countArr[i] === maxValue && maxCnt++;
}

maxCnt >= 2 // 각 앞파벳의 등장 수의 최댓값이
  ? console.log("?") // 2개이상 겹쳤다면 ?로
  : console.log(copyArr[countArr.indexOf(Math.max(...countArr))]);
// 그게 아니고 최댓값이 1개라면 그 최댓값에 해당되는 알파벳을 출력한다.
