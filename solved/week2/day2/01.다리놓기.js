// 결국 조합 문제..!

// 근데 1. 답은 다 맞게 나오는데..!
// => crossing되게끔 선택하면 안 된다는데,,,, 조합이 다 고려해서 짜는건가..?
// 2번째가 1 첫 번째가 2선택하면 안 되는데...?

// 결국 mCn을 푸는 문제..!

/**
 * 팩토리얼 함수!
 * @param {*} number : 자연수
 * @returns 팩토리얼 결과..!
 */
let factorial = (number) => {
  if (number === 1) return 1;
  else {
    return number * factorial(number - 1);
  }
};

let combinations = (n, m) => {
  return parseInt((factorial(m) / factorial(m - n)) * factorial(n));
};
let input = require("fs").readFileSync("dev/stdin").toString().split("\n"); //
let tc = +input[0];

for (let i = 1; i <= tc; i++) {
  // 1일 때..!
  let [n, m] = input[i].split(" ").map(Number);
  console.log(combinations(n, m));
}
