"use strict";
// 그리디는 다양한 옵션이 주어지는데, 선택을 할 때 마다 옵션 중 가장 큰 옵션을 선택해야 돼...
// 근데, 그 선택이 최종적으로도 올바른 선택이어야 함.! ❗️

const totalTime = Number(require("fs").readFileSync("dev/stdin").toString());
const typeOfTimes = [300, 60, 10];
let totalTimeArr = totalTime.toString().split("").map(Number);
let solution = (totalTime) => {
  let count = 0;
  let countArr = [];
  if (totalTimeArr[totalTimeArr.length - 1] !== 0) {
    countArr.push(-1);
    // 만약 나눌 수 없다면.... -1을 return
  } else {
    // 구할 수 있다면..... ❗️구할 수 있다면 그제서야 반복문을 돌리는 게 맞아..! => 어차피 일의 자리로만 구할 수 없는 걸 아는데.. 굳이 왜 반복문을 돌려!
    for (let time of typeOfTimes) {
      if (time > totalTime) {
        //
        countArr.push(0);
        continue;
      } else {
        // console.log(`${time}초 버튼 누를게요..!`);
        count = Math.floor(totalTime / time); // ex) 몫을 구해야 함.. count는!
        // console.log(count, "번 최대로 누를 수 있습니다.");
        countArr.push(count);
        totalTime = totalTime - time * count;
        // console.log(`이제 남은 시간 >> ${totalTime}`);
      }
    }
  }

  return countArr.join(" ").trim();
};

console.log(solution(totalTime));
