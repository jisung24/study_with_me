function solution(keyinput, board) {
  // 내 시작 위치
  let [currentX, currentY] = [0, 0];

  // 움직일 수 있는 위치
  // x위치
  let possibleX = [-1 * Math.floor(board[0] / 2), Math.floor(board[0] / 2)];
  // y위치
  let possibleY = [-1 * Math.floor(board[1] / 2), Math.floor(board[1] / 2)];

  for (let i = 0; i < keyinput.length; i++) {
    console.log(keyinput[i]);
    switch (keyinput[i]) {
      case "left": // 왼쪽!
        console.log("왼쪽입니다..!");
        if (currentX > possibleX[0] && currentX < possibleX[1]) {
          currentX--;
          console.log(currentX);
        }
        break;
      case "right": // 오른쪽!
        if (currentX > possibleX[0] && currentX < possibleX[1]) {
          currentX++;
        }
        break;
      case "up": // 위쪽!
        if (currentY > possibleY[0] && currentY < possibleY[1]) {
          currentY++;
        }
        break;
      case "down": // 아래쪽!
        if (currentY > possibleY[0] && currentY < possibleY[1]) {
          currentY--;
        }
        break;
    }
  }

  return [currentX, currentY];
}
let keyinput = ["left", "right", "up", "right", "right"];
let board = [11, 11];
console.log(solution(keyinput, board));
