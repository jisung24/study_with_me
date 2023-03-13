// 순열 조합 코드...!

// 조합
// [1,2,3,4]
// 1을 고르고 2 3 4중 pickCnt - 1개 고려!
function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반화
  return result;
}
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

// console.log(combinations([1, 2, 3, 4, 5], 3));
let result = combinations(arr, 3);
// console.log(result);
let sumArr = result
  .map((v) => v.reduce((acc, cur) => acc + cur))
  .filter((e) => e <= M)
  .sort((a, b) => {
    return a > b ? 1 : -1;
  });

console.log(sumArr[sumArr.length - 1]);
