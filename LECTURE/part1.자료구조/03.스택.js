"use strict";
// 타겟 넘버!
// => 각 단계마다 할 수 있는 step들을 모두 트리 노드로 만들어주기!
// => 각 단계는 트리의 depth가 된다.

// 근데 왜 dfs냐면,
// 결국 모두 탐방해서 나올 수 있는 모든 경우의 수들을 구하는거니까!!
// => 싹 다 탐방을 해서 경우의 수들을 구해야돼! => 그게 dfs방법이야 => bfs는 최단거리
let targetNumber = (numbers, target) => {
  // 구해야하는 숫자 : target(3)
  let answer = 0;
  const length = numbers.length; //

  function dfs(count, sum) {
    // dfs재귀 중단점 코드
    // count는 tree의 level => 모두 연산을 해줘야하니까!
    // 즉, 몇 번의 연산을 했는지!
    if (count === length) {
      // 연산을 레벨만큼 다 해줬으면!
      if (sum === target) {
        answer += 1; // 3인 횟수!
      } else {
        return; // undefined
      }
    } else {
      // 아직 레벨만큼 연산을 해주지 않았다면!
      dfs(count + 1, sum + numbers[count]);
      dfs(count + 1, sum - numbers[count]);
      // 누적값들은 전부 재귀함수 파라미터로 전달한다.
    }
  }

  dfs(0, 0); // 레벨 0부터, 합도 0

  return answer;
};

console.log(targetNumber([1, 1, 1, 1, 1], 3));
