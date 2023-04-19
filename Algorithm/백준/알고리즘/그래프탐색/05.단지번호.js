// 자 격자판이랑 일반 그래프가 주어졌을 때 다른 점
// let graph = [
//     [],
//     [2,3,5], // 1번 노드와 직접적으로 연결된 노드가 2 3 5야
//     // 즉 얘는 1번에서 파생된 간접연결이 아니라 직접 연결 됐다는 뜻이야.
// ]

// 근데 격자는 0 1 (1 0 1 0 0) => 0은 1만 직접적으로 연결이고 나머지 ()부분은 가장 처음 0과는 간접적으로 이루어진거야!
// 즉, 그럼 직접적으로 연결이 돼 있는 후보가 될 수 있는 곳은 상하좌우야.
// 그리고, 노드에 들어가 있는 정보는 [좌표]야. 2번노드 => [[1,3], [4,5]] 이런식으로 연결이 돼야 돼!

// 그럼 격자는 어떻게 풀 수 있을까?
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);

// 그래프였다면... 시작노드를 넘겨주고, 격자라면 시작 좌표를 넘겨준다.
function dfs(x, y) {
  // 범위 안에 들어있는 지 계산!
  if (x <= -1 || x >= N || y <= -1 || y >= N) return 0; // 넷 중 하나라도 만족을 못 하면 out.
  // 범위안에 없다면....... => 0을 return

  // 범위 안에 들어있다면...
  if (graph[x][y] >= 1) {
    // 아직 방문 하지 않았다면...!
    graph[x][y] = 0; // 방문 처리해주고...!
    let result = 1;
    result += dfs(x - 1, y);
    // 봐봐 우리는 그래프 가보면... 결국  2 : [1,2,3]
    // 이거처럼 2에서 반복문을 해서 1 2 3 하나씩 dfs를 돌려줘.
    // 여기는 반복문을 없이 그냥 돌려주는거야!
    result += dfs(x + 1, y);
    result += dfs(x, y - 1);
    result += dfs(x, y + 1);

    return result; // 몇 번 돌았는 지...!
  }
  return 0;
}
// 그래프 정보 입력
let graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split("").map(Number));
}
// 전체 010101얘네를 전부 그래프에 넣어준다.!

let answer = [];

// 그래프 크기만큼... 돌려서
// 모든 위치에 대해서 dfs를 호출해준다...!
for (let i = 0; i < N; i++) {
  // 그래프 1,1 부터 돈다..!
  for (let j = 0; j < N; j++) {
    let current = dfs(i, j); // 모든 위치에 대해서... dfs를 때려줘도 되고....  아니면 그냥 좌표에서 1일 때 만 해줘도 되고...
    if (current > 0) {
      answer.push(current); // 결국 dfs내 노드의 개수를 파악했다는 건...
      // dfs가 1번 실행이 됐다는거야! => 그니까 횟수를 따로 안 받아도 돼!
      // 내부가 0이 아니라면 dfs가 1번 실행된거야!
    }
  }
}
answer.sort((a, b) => a - b);
console.log(answer.length + "\n" + answer.join("\n"));
