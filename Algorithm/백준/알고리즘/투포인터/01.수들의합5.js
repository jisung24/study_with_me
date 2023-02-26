const input = parseInt(
  require("fs").readFileSync("dev/stdin").toString().trim()
);
// 1 2 3 4 5 6 7 8 이런식으로...!
let answer = 0;

let start = 1;
let end = 1;
let sum = 1;

while (start <= end) {
  // start가... 더 커지면..!!
  if (sum === input) {
    // 만약 같다면...!
    answer += 1;
  }

  if (sum >= input) {
    // ❗️ 같아도.... 뒤에를 늘리는 게 아니라,, start를 늘린다...!
    // 더 작아져야 돼..!
    sum -= start;
    start += 1;
  } else if (sum < input) {
    // 더 작아진다면...!
    end += 1;
    sum += end;
  }
}

// while (start <= end) { // start가 더 커지면...!!
//   if (sum == input) {
//     console.log(`구간 >> ${start}, ${end}`);
//     answer++;
//   }
//   if (sum < input) {
//     end++;
//     sum += end;
//   } else if (sum >= input) {
//     sum -= start;
//     start++;
//   }
// }

// console.log(answer);
