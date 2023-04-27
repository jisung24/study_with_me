"use strict";
// 내 것만 있는 애들 true
// 여유 : reserve
// 빌려야 하는 친구들 : lost

// 일단 모든 애들 다 true로...!
let n = 3;
let lost = [3];
let reserve = [1]; // 2나 4한태만 빌려줄 수 잇어.
// 그리고 다 빌려줬으면 이젠 더 이상 못 빌린다는 뜻으로 true로 바꿔준다.

// reserve가 왼쪽 빌려주면 돼!!!
// 없으면 오른쪽!!!
// 그니까 이미 빌려줬으면... 안 빌려줘도 돼!
// true는 신경 안 써줘도 돼! => 결과 출력용!

let map = new Map();
for (let i = 1; i <= n; i++) {
  map.set(i, true);
}
for (let i = 0; i < reserve.length; i++) {
  map.set(reserve[i], "reserve");
}
for (let i = 0; i < lost.length; i++) {
  // ⭐️ 만약, 여유있는 사람이 잃어버렸다면, 그냥 true라고 설정해준다!
  if (map.get(lost[i]) === "reserve") {
    map.set(lost[i], true);
  } else {
    map.set(lost[i], "lost");
  }
}

map.forEach((value, key) => {
  if (value === "reserve") {
    // 여유있는 친구를 발견했는데...!
    if (map.has(key - 1) && map.get(key - 1) === "lost") {
      // 전 친구가 가져오지 않았다면...!
      map.set(key - 1, true);
      map.set(key, true);
      // 이제 전 친구는 가져왔는데...!
      // 다음 친구가 안 가져왔을 경우...!
    } else if (map.has(key + 1) && map.get(key + 1) === "lost") {
      map.set(key + 1, true);
      map.set(key, true);
    }
  }
});
console.log(map);
let answer = [];
map.forEach((value) => {
  if (value === true || value === "reserve") answer.push(value);
});

console.log(answer.length);

// 그리디는 항상 쪼개서,,, 그 최소, 최대를 생각해보자..!
