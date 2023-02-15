"use strict";
// javascript에서 배열을 쓰기 위해선 써야한다.

// 배열을 만드는 방법.
let arr = Array.from({ length: 10 }, (_, i) => i + 1);

arr.push(3); // O(1)
arr.splice(1, 3, "추가1", "추가2", "추가3"); // index 1번 포함 3개를 삭제함.

// 배열 접근
console.log(arr[4], arr[7]);

// 배열 검색  O(n)
console.log(arr.indexOf(3)); // 3이 있는 지 검색한다.

// 배열 값 추가 -> 뒤에 있는 요소들 전부 뒤로 한 칸씩 미뤄야 돼!
// - 끝에 추가 ( push ) O(1)
// - 중간에 추가 ( splice ) O(n)
// - 처음에 추가 ( unshift ) O(n)

// 배열 값 삭제
// - 끝 삭제(pop) O(1)
// - 중간 삭제 ( splice )  O(n)
// - 처음 삭제 ( shift ) O(n)

// ❗️ 연결리스트 ❗️
// - 배열은 순차적으로 연속적으로 메모리를 사용한다.
// - 연결리스트는 아무데나.. 포인터를 사용한다.

// - 배열의 삽입 삭제는 O(n)이 소요된다.
// - 하지만 연결리스트는 그냥 O(1)이 소요됨.

// 연결리스트 구현 어려움....

// stack (last in first out)
// - 가장 최근에 값만을 신경써야 할 때!
// - 프링글스 구조

// - push와 pop말고는 없어!
// ❗️ 가장 맨 위에 것 만 컨트롤 할 수 밖에 없어...! ❗️
// 즉 가장 최근 값 만 신경 써주면 돼!

// stack은 배열로 stack과 똑같이 작동하게 할 수 있다.
// 그냥 배열의 끝에서 값을 추가해주는 push
// pop을 사용하면 stack구현 끝이야..!
// 가장 위에 있는 값은 배열의 끝 값
// stack의 size는 length
// 전부 배열로 가능해.!!
{
  let stack = [];
  stack.push(3);
  console.log(stack);
}
