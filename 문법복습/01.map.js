"use strict";
// 정렬 => set,map객체 => spread연산자 순으로 공부함.

// javascript에서 hash를 지원해주는 다른 함수!
// 일반 객체, map객체

// hash라고 생각해주면 돼!
// 값 : 특징 이렇게!

let myMap = new Map();
myMap.set("name", "지성");
myMap.set("age", 26);
myMap.set("major", "computer engineering!");
console.log(myMap);
// map객체!

// 속성으로 값 확인..!
console.log(myMap.get("name")); // 지성

// has() : 객체에서 in과 같다..!
console.log(myMap.has("name"));

// size() : map의 속성 개수!
console.log(myMap.size);

// 속성 삭제
myMap.delete("major");
console.log(myMap);
