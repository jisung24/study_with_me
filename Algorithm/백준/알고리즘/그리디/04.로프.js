"use strict";
// 로프의 굵기가 각각 다를 수 있다.
// -> 들 수 있는 물건의 중량이 다를 수 있다.

// 병렬로 연결하면 각각의 rope에 걸리는 중량을 나눌 수 있다.
// 로프 3개로 15kg인 물건 들면 rope에는 똑같이 5 5 5로 실리게 된다.
// 즉, 버틸 수 있는 중량이 10kg인 물체는 10밖에 들지 못 한다.
// 15면 15..

// ❗️로프들을 전부 사용 할 필요는 없다....?
// => 몇 개만 골라서 써도 된다는게 몰까....

// 로프 2개
// 10kg 버틸 수 있는 rope
// 15kg 버틸 수 있는 rope

// 만약 10 30 60이 있는데,
// 10을 뽑으면 최대 30kg까지 밖에 들지 못 해...
// 근데 30 60으로 2개만 들으면, 최대 60kg까지는 들 수 있어..
// 즉❗️ 민폐인 rope는 빼는게 맞아.

// 내림차순으로 일단 찍어...
// 각 value마다 들 수 있는 최댓값을 구해보자...

// 예를들면 15만 15 * 1 = 15kg
// 15 10하면 작은거  * 2 = 20kg
// 이런식으로 경우의 수를 계속 다르게 해보자...!!
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let ropeCount = input.shift();
let ropeWeight = input.sort((a, b) => b - a);
let ropeBox = []; // 모든 경우의 수 무게들을 여기 다 넣고
// 내림차순해서 ropeBox[0]구해주면 돼!
let max = 0; // 들 수 있는 최대 무게
for (let value of ropeWeight) {
  // 15 10
  ropeBox.push(value); //  15들어감.
  console.log(`쓰는 rope >> ${ropeBox}`);
  console.log(`최대 무게 >> ${ropeBox[ropeBox.length - 1] * ropeBox.length}`);
  max < ropeBox[ropeBox.length - 1] * ropeBox.length &&
    (max = ropeBox[ropeBox.length - 1] * ropeBox.length);
}
// console.log(max);
console.log(`들 수 있는 최댓값 >> ${max}`);

// 왜 그리디인가...?
// 들 수 있는 최고의 무게니까.. 일단 rope들을 전부 내림차순으로 정렬을 해서,
// 1 2 3개 들 수 있는 모든 경우의 수를 찾는다..

// 예를들면 50 10 5 3 밧줄이 있다고하면,
// 50 * 1 => 최대 50kg
// 10 * 2 => 최대 20
// 우선 최대 무게를 들려면 적어도 밧줄이 무거운거 먼저 정렬을 해야겠지!!
// 그리고, 그 밧줄이 포함되면 length로 나눈다!!
// ropeBox[ropeBox.length - 1] * ropeBox.length;
