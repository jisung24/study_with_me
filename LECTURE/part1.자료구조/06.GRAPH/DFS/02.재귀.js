let graph = [
  [], // 0번 정점은 없음.
  [2, 3, 4],
  [5],
  [6, 7, 8],
  [9, 10],
];
let visited = new Array(graph.length).fill(false); // [ false, false, false, false, false ] => 다 true로 만들어줄거야!

function DFS(startNumber) {
  // 자 dfs의 목적은 전부 방문 처리를 해주는거야! => visited에 전부 false를 true로 바꿔주기(0번 정점빼고)
  visited[startNumber] = true; //시작 노드를 방문 처리해줌. visited를 true로!
  // 이제 그 시작노드와 연결된 2 3 4번 노드도 visited에서 true로 바꿔줘야 함.
  // 근데 여기서 2 3 4번만 하고 끝내면 나머지 visited는 false인 채로 남음 (2 3 4밑에 있는 것들도 전부 true로 바꿔줘야 dfs를 도는거지!)
  for (let value of graph[startNumber]) {
    // 2 3 4
    if (visited[value] === false) {
      // 2번이 아직 탐방 전이라면,
      visited[value] = true; // 2번을 탐방했다고 바꿔주고,
      DFS(value); // 2번에서 그 밑에 이어진 것들을 전부 dfs돌아주자!
    }
  }
}

DFS(1);
console.log(visited);
