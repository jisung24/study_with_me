// 1차원 배열을 탐색하는 문제야!!
let arr = [7, 3, 9, 5, 6, 12];
let chosen = [];

chosen.push(arr[0]); // 무조건 맨 앞([0]) 수는 포함을 시켜야해서..!
let prev = arr[0]; // 이전 값 7
let cur = 0;
for (let i = 1; i < arr.length; i++) {
  cur = arr[i]; // 현재값 3

  if (cur <= prev) {
    prev = cur; // 이전값을 3으로 만들어줌.
  } else {
    // 선택!
    chosen.push(cur);
    prev = cur; // 이전값을 3으로 만든다.
  }
}
console.log(chosen);

// 탐색문제
// 이전 값과 현재 값을 기억하고 선택하는 문제!!!
// ❗️prev와 cur을 기억하는 것이 제일 중요했어❗️
