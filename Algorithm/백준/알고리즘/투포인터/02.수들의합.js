let number = Number(require("fs").readFileSync("dev/stdin").toString());
// 여기서 n이 1000만이라서,,
// 무조건 n으로 풀어야 함 => 투 포인터...!

// 아무래도... 연속된 숫자의 합은  0 0으로 시작하는게 좋아보임...!

// 배열을 안 만들고.....
// 1부터 number까지...!

let left = 1;
let right = 1;
let sum = 1;
let answer = 0; // 정답 횟수...!
// 왼쪽이 오른쪽 보다 커지면...
while (left <= right) {
  if (sum === number) {
    console.log(`[${left}, ${right}]`);
    answer++;
  }

  if (sum > number) {
    sum -= left;
    left++;
  } else if (sum <= number) {
    right++;
    sum += right;
    console.log(`sum >> ${sum}`);
  }
}
console.log(answer);
