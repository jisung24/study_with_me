"use strict";
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

// 값 만 가져오기
console.log(`값 >> `, Object.values(map));

console.log(map);

// 맵의 사이즈 확인
console.log(map.size); // 2

// 존재하는 지 확인 (key이름으로 확인한다.)
console.log(map.has("key1"));

// 순회도 가능하다. => map에서 제공하는 forEach (value, key)둘 다 받아올 수 있다.
// key, values, entries를 통해서도 반복이 가능하다.
map.forEach((value, key) => {
  console.log(`[ ${key}, ${value} ]`);
});

// key만 가져오기
console.log(`key에 해당하는 value >> `, map.keys());
// value만
console.log(map.values());
// 둘 다
console.log(map.entries());

// 찾기
console.log(map.get("key1"));
console.log(map.get("value1")); // undefined

// 추가
map.set("key3", "안녕!");

// 삭제
map.delete("key1");

// 전부 삭제
map.clear();
console.log(map); // size : 0

map.get;

// 이런식으로.. map은 key가 고유 Id이기 때문에 거의 모든 과정이 key를 통해서 진행이 된다.
let arr = [1, 1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 1, 1, 1];
let map2 = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (!map2.has(arr[i])) {
//     map2.set(arr[i], 1); // 그냥 value를 2로...!
//   } else {
//     // 갖고 있다면!!!! value를 ++해준다..!
//     map2.get(arr[i]) = map2.get(arr[i])++;
//     console.log(map2.get(arr[i]));
//   }
// }
