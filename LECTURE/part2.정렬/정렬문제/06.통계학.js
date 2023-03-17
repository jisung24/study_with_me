"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

/**
 * 1. 산술평균 함수
 * @param {*} arr : 산술 평균을 구해줄 배열.
 * @returns : 소수 첫 번째 자리에서 반올림해줌 (toFixed(0));
 */
let arithmeticAvg = (arr) => {
  return Math.round(arr.reduce((acc, num) => (acc += num), 0) / N);
};

/**
 * 2. 중앙값 : 무조건 arr을 오름차순 정렬을 시켜준 다음 가운데 값을 구해줘야 돼!
 * @param {*} arr : 배열
 * @returns : 중앙값 return
 */
let centerValue = (arr) => {
  return arr[Math.floor(arr.length / 2)];
};

/**
 * 3. 최빈 값 : 최빈값이 여러개라면 정렬 후 2번째로 작은 값을 출력해주자.
 * @param {*} arr : 최빈값을 구할 배열
 * @returns : 최빈값! (여러 개 라면 2번째로 작은 값 )
 */
let often = (arr) => {
  let hash = {};

  for (let value of arr) {
    if (value in hash === false) {
      hash[value] = 1;
    } else {
      hash[value] += 1;
    }
  }
  let max = Math.max(...Object.values(hash));

  // 어떤 key가 가장 많이 나왔는 지 확인하기 위해..! key를 찾아준다.
  let findKey = Object.keys(hash) // []
    .filter((e) => hash[e] === max)
    .map(Number)
    .sort((a, b) => a - b);
  return findKey.length >= 2 ? findKey[1] : findKey[0];
  // 어차피 findKey가 1개라면 index 0번 출력..!
};

/**
 * 4. 범위 : 최댓값과 최솟값의 차이
 * @param {*} arr : 범위를 구할 배열
 * @returns : 범위
 */
let range = (arr) => {
  return Math.max(...arr) - Math.min(...arr);
};

// 이미 arr은 정렬이 돼서 들어감!
let answer = "";
arr.sort((a, b) => a - b); // 함수 호출 전에만 정렬 돼 있으면 돼!
answer += arithmeticAvg(arr) + "\n";
answer += centerValue(arr) + "\n";
answer += often(arr) + "\n";
answer += range(arr) + "\n";
console.log(answer);

// 나는 산술평균에서 틀림!!!!!
// round를 사용해주지 않고 toFixed를 사용해줌
// 와,,, toFixed는 문자열로 숫자 반환해...!!!!!!!!!!!!!!!
console.log(typeof (1.51).toFixed(0));
