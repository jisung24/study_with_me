"use strict";
// 객체의 내부 동작은 해시테이블처럼 구현이 돼 있다.
// 그럼 코딩테스트에서 객체가 도대체 언제 어디서 써야 하는 지!

let stu = {
  // index 4번
  name: "지성", // 이 key들이 전부 배열의 index로 변환됨
  // ❗️hash function❗️

  // 근데 index로 바뀔 떄 충돌이 발생할 수 있음.
  // index 3번
  age: 26,

  // index 5번
  grade: "A",
};

// 즉 객체를 사용 할 때는, 자료에 뜻을 구별해주고 싶을 때!
// 연관된 자료에 각각의 뜻을 부여해주고 싶을 때..!
// 자료에 뜻을 주고 싶을 떄...!
// 아 97이란 숫자는 수학 점수구나.
let score = {
  math: 97,
  eng: 88,
  korean: 99,
};

console.log(score);
// 값 수정
score["math"] = 100;
console.log(score);

// 값 추가 O(n)
score.sci = 89; // 역시 sci라는 key를 분석해서 해시함수가 자동 index를 지정해서 만들어줘.
console.log(score);

// 키가 한 1000가지 돼서 내가 어떤 키가 있는 지 알 수 없을 떄!!!
console.log("math" in score); // true
console.log("eng" in score); // true
console.log("art" in score); // true

if ("math" in score) {
  console.log(`key발견!!! ?>> ${score["math"]}`);
} else {
  console.log("그런 키 없습니다...!");
}

// ❗️in문법은 진짜 좋아...❗️
// O(1)으로 바로 찾을 수 있다는거야...!
// 딕셔너리는 진짜 시간복잡도를 말도안되게 줄여준다

// 코딩테스트에 적용하기
// ❗️너무 많이 나온다❗️
// 장점 : 시간복잡도를 엄청 낮춰준다.

{
  let nums = [4, 1, 9, 7, 5, 3, 16];
  // 완전 탐색으로 1개씩 전부 다 더해보는 걸 해 봄..
  // 14가 될 수 있는 지 없는 지!
  // O(n^2)나옴.

  // 시간복잡도를 줄이기 위해서 투 포인터를 사용함
  let sort = nums.sort((a, b) => a - b);
  console.log(sort);

  // ❗️ 접근 방법 ❗️
  // 1. 완전 탐색 => 하나하나 일일이 다 해보는거야..!
  // -> 이건 근데 좀 똑똑하지 못 한 방법이야.

  // 메모리는 똑똑한 뇌를 갖고있다고 생각하자!
  // 한 번 슥~ 보면 전부 기억해.
  // 5를 본 순간 아까 9봤어 하고 14 됐어..
  // 바로 이렇게 똑똑하게 메모리에다가 값을 넣어서 기억해줘야 돼!

  // 그게 해시테이블
  // 똑똑한 뇌를 object로 구현하자..!
  // 기억하고 싶은 숫자를 key에다가 넣자!! value말고....!!!!!

  // 엄청 똑똑한 뇌라고 생각하자..!
  let hashNum = {};

  for (let value of sort) {
    hashNum[value] = true;
  }
  console.log(hashNum);

  // 엄청 똑똑한 뇌 처럼 포함이 돼 있는 key가 10000개여도 전부 O(1)로 찾을 수 있어.

  console.log("1" in hashNum); // 1이라는 숫자가 뇌에 있는 지 없는 지!

  // 만약 배열에 숫자가 있었다면 1을 찾는데 최대 O(N)이 걸린다.
  // 해시테이블은 hash function이 바로 찾아준다!! O(1)

  // 대신 key가 겹치면 안 돼!
  // 즉 숫자가 겹쳐버리면 못 와..
  // 대신 value로 그 숫자의 개수를 알려주면 되겠지

  // 반복문을 돌면서.... 각 14 - key에 대한 key가 있는 지!

  // 배열의 값들을 다 기억하고 싶을 때...!!
  let arr = [1, 2, 3, 1, 1, 2, 3, 2, 1, 5, 6, 7];
  let set = Array.from(new Set(arr));
  // 어떤 수가 몇 번 나왔는 지 hash로 풀어보자...!!
  let obj = {};

  // obj key setting!
  for (let value of set) {
    obj[value] = 0;
  }

  for (let value of arr) {
    if (value in obj) {
      obj[value] += 1;
    }
  }

  console.log(obj);
}
