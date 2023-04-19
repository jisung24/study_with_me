// 구멍보트!
let people = [70, 50, 80, 50];
let target = 100; // 합 100
// 두 수의 합을 확인하고 어떤 절차를 행하는 알고리즘...!
// 두 수의 합이 target중심으로 큰지 같은지 작은지를 확인하는 알고맂므!!

let solution = (people, limit) => {
  let answer = 0; // boatCnt
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    if (people[left] + people[right] > limit) right--;
    else {
      left++;
      right--;
    }

    answer++;
  }

  if (left === right) answer++;
  return answer;
};

console.log(solution(people, target));
